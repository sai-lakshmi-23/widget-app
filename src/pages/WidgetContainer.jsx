// src/pages/WidgetContainer.jsx
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab } from '../slices/activeTabSlice';
import { addImages } from '../slices/imagesSlice';
import styled from 'styled-components';
import InnerContainer from './InnerContainer';
import Header from '../components/Header';
import Body from '../components/Body';
import LeftIcons from '../components/LeftIcons';
import PostHeader from '../components/PostHeader';
import Gallery from '../components/Gallery';
import { bioData } from '../utilities/constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  & > div:first-of-type {
    margin-bottom: 14px;
  }
`;

const WidgetContainer = () => {
  const activeTab = useSelector((state) => state.activeTab);
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <InnerContainer
        header={<Header activeTab={activeTab} setActiveTab={(tab) => dispatch(setActiveTab(tab))} />}
        body={<Body bodyContent={bioData[activeTab]} />}
        leftIcons={<LeftIcons />}
      />
      <InnerContainer
        header={<PostHeader setImages={(newImages) => dispatch(addImages(newImages))} />}
        body={<Body bodyContent={<Gallery images={images} />} />}
        leftIcons={<LeftIcons />}
      />
    </Wrapper>
  );
};

export default WidgetContainer;
