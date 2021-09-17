import './styles.less';

const resourcesData = {
  community: {
    title: 'Community',
    data: [
      {
        address: 'https://aiportraits.org/',
        desc: 'A Ai website to create sth freely',
        key: 'aiportraits',
      },
      {
        address: 'https://petalica-paint.pixiv.dev/index_en.html',
        desc: 'A Ai website to create sth freely',
        key: 'petalica',
      },
      {
        address: 'https://www.instapainting.com/ai-painter',
        desc: 'A Ai website to create sth freely',
        key: 'instapainting',
      },
      {
        address: 'Www.blender.org',
        desc: 'A Ai website to create sth freely',
        key: 'blender',
      },
      {
        address: 'https://app.inferkit.com/demo',
        desc: 'A Ai website to create sth freely',
        key: 'inferkit',
      },
    ],
  },
  developer: {
    title: 'Developer tools',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </br>Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.<br/>Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
  },
};

export default function ResourcesPage() {
  const { community, developer } = resourcesData;
  return (
    <div className="page-container">
      <div className="page-content width-1130">
        <div className="page-block">
          <div className="block-theme">{community.title}</div>
          <div className="block-content">
            <div className="community-list">
              {community.data.map((item) => (
                <div className="community-item" key={item.key}>
                  {item.address}
                  <span className="community-intro">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="page-block">
          <div className="block-theme">{developer.title}</div>
          <div
            className="block-content"
            dangerouslySetInnerHTML={{ __html: developer.desc }}
          />
        </div>
      </div>
    </div>
  );
}
