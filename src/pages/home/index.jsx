import Spec from '../../components/spec';
import Gallery from '../../components/gallery';
import Faq from '../../components/faq';
import Contract from '../../components/contract';
import RoadMap from '../../components/roadmap';
import Initiators from '../../components/intitiators';

export default function IndexPage() {
  return (
    <>
      <Spec />
      <Gallery />
      <RoadMap />
      <Initiators />
      <Faq />
      <Contract />
    </>
  );
}
