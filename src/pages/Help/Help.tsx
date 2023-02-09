import { FC } from 'react';
import styles from './Help.module.scss';
import { useNavigate } from 'react-router-dom';
import { communityLinks, documentationIndexList } from 'utils/constants/links';
import { SearchPanel } from 'components/SearchPanel'

const Help: FC = () => {
  const navigate = useNavigate();
  const communityKeys = ['github', 'discord', 'telegram'];
  const communityList = communityLinks.filter((item) => communityKeys.includes(item.id)).sort((a,b)=>{
    return communityKeys.findIndex(v=>v === a.id) < communityKeys.findIndex(v=>v === b.id) ? -1 : 1;
  });

  const handleChangeDocumentation = (link: string | null) => {
    if (!link) return;
    navigate(link);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.help_header}>
        <h2 className={styles.title}>How can we help?</h2>
        <p className={styles.subtitle}>
          Discover solutions in our <strong>documentation</strong> and <strong>community</strong>
        </p>
        <div className={styles.search_box}>
          <div className={styles.search_bg} />
          <SearchPanel />
        </div>
      </div>

      <h3 className={styles.documentations_title}>
        Browse documentation by product
      </h3>
      <div className={styles.documentations_wrapper}>
        {documentationIndexList.map((item) => (
          <div
            className={styles.item}
            key={item.id}
            onClick={() => handleChangeDocumentation(item.link)}
          >
            <div className={styles.icon_box}>
              <img src={item.icon} alt="" />
            </div>
            <div className={styles.text_box}>
              <p className={styles.item_title}>{item.title}</p>
              <p className={styles.item_desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className={styles.community_title}>
        Get your questions answered in our communities.
      </h3>
      <div className={styles.communities_wrapper}>
        {communityList.map(item => (
          <a key={item.id} href={item.path} target="_blank" rel="noreferrer">
            <div className={styles.community_item}>
              <img className={styles.icon} src={item.icon} alt="icon" />
              <div className={styles.name}>Go to {item.label}</div>
              <i className={styles.link_icon} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Help;
