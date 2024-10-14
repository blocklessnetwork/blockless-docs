;(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined'
		? factory()
		: typeof define === 'function' && define.amd
		? define(factory)
		: factory()
})(this, function () {
	'use strict'

	function styleInject(css, ref) {
		if (ref === void 0) ref = {}
		let insertAt = ref.insertAt

		if (!css || typeof document === 'undefined') {
			return
		}

		let head = document.head || document.getElementsByTagName('head')[0]
		let style = document.createElement('style')
		style.type = 'text/css'

		if (insertAt === 'top') {
			if (head.firstChild) {
				head.insertBefore(style, head.firstChild)
			} else {
				head.appendChild(style)
			}
		} else {
			head.appendChild(style)
		}

		if (style.styleSheet) {
			style.styleSheet.cssText = css
		} else {
			style.appendChild(document.createTextNode(css))
		}
	}

	let css =
		'.sidebar-nav > ul > li ul {\n  display: none;\n}\n\n.app-sub-sidebar {\n  display: none;\n}\n\n.app-sub-sidebar.open {\n  display: block;\n}\n\n.sidebar-nav .open > ul:not(.app-sub-sidebar),\n.sidebar-nav .active:not(.hold) > ul {\n  display: block;\n}\n\n.active + ul.app-sub-sidebar {\n  display: block;\n}\n'
	styleInject(css)

	$docsify.plugins = [
		function (hook, vm) {
			hook.doneEach(function (html, next) {
				let el = document.querySelector('.sidebar-nav .active')

				if (el) {
					el.classList.add('open')

					while (el.className !== 'sidebar-nav') {
						if (
							el.parentElement.tagName === 'LI' ||
							el.parentElement.className === 'app-sub-sidebar'
						) {
							el.parentElement.classList.add('open')
						}

						el = el.parentElement
					}
				}

				next(html)
			})
		}
	].concat($docsify.plugins || [])
	window.addEventListener('hashchange', function (e) {
		requestAnimationFrame(function () {
			let el = document.querySelector('.sidebar-nav .active')

			if (el) {
				el.parentElement.parentElement.querySelectorAll('.app-sub-sidebar').forEach(function (dom) {
					return dom.classList.remove('open')
				})

				if (el.parentElement.tagName === 'LI' || el.parentElement.className === 'app-sub-sidebar') {
					el.parentElement.classList.add('open')
				}
			}
		})
	})
	document.addEventListener(
		'scroll',
		function (e) {
			requestAnimationFrame(function () {
				let el = document.querySelector('.app-sub-sidebar > .active')

				if (el) {
					el.parentElement.parentElement
						.querySelectorAll('.app-sub-sidebar')
						.forEach(function (dom) {
							return dom.classList.remove('open')
						})

					while (el.parentElement.classList.contains('app-sub-sidebar')) {
						el.parentElement.classList.add('open')
						el = el.parentElement
					}
				}
			})
		},
		false
	)
	document.addEventListener('DOMContentLoaded', function () {
		document.querySelector('.sidebar-nav').addEventListener(
			'click',
			function (e) {

        let elp = e.target.parentElement // parent
        let elpg = elp.parentElement // grandparent

        // parent
				if (e.target.tagName === 'A') {
					if (elp.tagName === 'LI' || elp.tagName === 'P') {
						if (elp.classList.contains('open')) {
							requestAnimationFrame(function () {
								elp.classList.add('collapse')
								elp.classList.remove('open')
								elp.classList.add('hold')
							})
						} else {
							requestAnimationFrame(function () {
								if (elp.classList.contains('hold')) {
									elp.classList.remove('collapse')
									elp.classList.add('open')
									elp.classList.remove('hold')
								}
							})
						}
					}
				}

        // grandparent
        if (elpg.classList.contains('open')) {
          requestAnimationFrame(function () {
            elpg.classList.remove('open')
          })
        } else {
          requestAnimationFrame(function () {
            elpg.classList.add('open')
          })
        }

			},
			true
		)
	})
})
