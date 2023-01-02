import { FC } from 'react';
import styles from './Help.module.scss';
import { ReactComponent as FunctionIcon } from 'assets/icons/functions.svg';
import { ReactComponent as AccountIcon } from 'assets/icons/account.svg';
import { ReactComponent as CliIcon } from 'assets/icons/cli.svg';
import { ReactComponent as DocumentationIcon } from 'assets/icons/documentation.svg';
import { ReactComponent as DocumentationMobileIcon } from 'assets/icons/documentation-mobile.svg';
import { ReactComponent as DocumentationCircleIcon } from 'assets/icons/documentation-circle.svg';
import githubIcon from 'assets/icons/github.svg';
import discordIcon from 'assets/icons/discord.svg';
import blocklessIcon from 'assets/icons/blockless.svg';
import blocklessNetworkIcon from 'assets/icons/blockless-network.svg';
import externalLinkIcon from 'assets/icons/external-link.svg';
import { useNavigate } from 'react-router-dom';
import { communityLinks, documentationItems } from 'utils/constants/links';

const Help: FC = () => {
  const navigate = useNavigate();

  const getBlockIcon = (id: string) => {
    switch (id) {
      case documentationItems[0].id:
        return <DocumentationCircleIcon />;
      case documentationItems[1].id:
        return <FunctionIcon />;
      case documentationItems[2].id:
        return <AccountIcon />;
      case documentationItems[3].id:
        return <CliIcon />;
      case documentationItems[4].id:
        return <DocumentationIcon />;
      case documentationItems[5].id:
        return <DocumentationMobileIcon />;

      default:
        return <FunctionIcon />;
    }
  };

  const handleChangeDocumentation = (link: string | null) => {
    if (!link) return;
    navigate(link);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>How can we help?</h2>
      <p className={styles.subtitle}>
        Discover solutions in our documentation.
      </p>
      <div className={styles.documentations_wrapper}>
        {documentationItems.map((item) => (
          <div
            className={styles.item}
            key={item.id}
            onClick={() => handleChangeDocumentation(item.link)}
          >
            {getBlockIcon(item.id)}
            <p className={styles.item_title}>{item.title}</p>
          </div>
        ))}
      </div>
      <h3 className={styles.community_title}>
        Get your questions answered in our communities.
      </h3>
      <div className={styles.communities_wrapper}>
        <div className={styles.community_item}>
          <div className={styles.community_header}>
            <a
              href={communityLinks.find((item) => item.id === 'discord')?.path}
              target="_blank"
              rel="noreferrer"
            >
              <img src={discordIcon} alt="discord icon" />
            </a>
            <p>
              <a
                href={
                  communityLinks.find((item) => item.id === 'discord')?.path
                }
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </p>
          </div>
          <div className={styles.community_footer}>
            <a
              href="https://blockless.network/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={blocklessIcon} alt="hash icon" />
            </a>
            <p>
              <a
                href="https://blockless.network/"
                target="_blank"
                rel="noreferrer"
              >
                Blockless
              </a>
            </p>
          </div>
        </div>
        <div className={styles.community_item}>
          <div className={styles.community_header}>
            <a
              href={communityLinks.find((item) => item.id === 'github')?.path}
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="github icon" />
            </a>
            <p>
              <a
                href={communityLinks.find((item) => item.id === 'github')?.path}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
          <div className={styles.community_footer}>
            <a
              href="https://github.com/orgs/blocklessnetwork/discussions"
              target="_blank"
              rel="noreferrer"
            >
              <img src={blocklessNetworkIcon} alt="book icon" />
            </a>
            <p>
              <a
                href="https://github.com/orgs/blocklessnetwork/discussions"
                target="_blank"
                rel="noreferrer"
              >
                BlocklessNetwork / Community
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className={styles.issues_block}>
        <span>Still having issues? </span>
        <a href="/">Reach out for direct support</a>
        <img src={externalLinkIcon} alt="external link icon" />
      </p>
    </div>
  );
};

export default Help;
