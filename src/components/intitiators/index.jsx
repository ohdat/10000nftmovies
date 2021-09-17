import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';
import { connect } from 'umi';
import './styles.less';

const InitiatorsComponent = (props) => {
  const id = 'initiators';
  const { scroll } = props;
  let active = false;
  if (id === scroll) active = true;
  return (
    <ScrollIntoViewIfNeeded active={active}>
      <div className="initiators-wrapper">
        <div className="initiators-box box-content">
          <div className="wrapper-title">INITIATORS</div>
          <div className="wrapper-content">
            <p>
              We are a group of veteran animation filmmakers who were let down
              by the culture of big Hollywood studios. We want to do something
              new so we took a leap of faith into the NFT world. The question
              we’ve been asking ourselves is: is it possible to embrace DAO in
              filmmaking? And here we are with 10,000 procedurally generated
              movie titles about Sam.{' '}
            </p>
          </div>
        </div>
      </div>
    </ScrollIntoViewIfNeeded>
  );
};

export default connect(({ scroll }) => ({ scroll: scroll.currentNode }))(
  InitiatorsComponent,
);
