import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const SwitchRouterToTop = () => {
  const { pathname } = useLocation()
  
  useEffect(()=>{
    document.documentElement.scrollTop = document.body.scrollTop = 0
  },[pathname])

  return null
}

export default SwitchRouterToTop