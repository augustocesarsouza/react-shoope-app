import { useEffect, useRef, useState } from 'react';
import EachCategory from '../EachCategory/EachCategory';
import * as Styled from './styled';
import { Url } from '../../../../Utils/Url';
import SvgArrowLeft from '../../../Svg/SvgArrowLeft/SvgArrowLeft';
import SvgArrowRight from '../../../Svg/SvgArrowRight/SvgArrowRight';

interface CategoriesProps {
  id: string;
  imgCategory: string;
  altValue: string;
  title: string;
}

const CategoryAllMan = () => {
  const [allCategory, setAllCategory] = useState<CategoriesProps[] | null>(null);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    const res = await fetch(`${Url}/get-all-categories`);
    const json = await res.json();

    const data: CategoriesProps[] = json.data;

    setAllCategory(data);
  };

  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  const RefContainerArrowLeft = useRef<HTMLDivElement | null>(null);
  const RefContainerArrowRight = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const scrollElement = document.querySelector('.carousel-custom-category');
    const containerLeft: HTMLElement | null = document.querySelector(
      '.container-arrow-left-category'
    );
    const containerRight: HTMLElement | null = document.querySelector(
      '.container-arrow-right-category'
    );

    const scrollLeft = () => scrollElement?.scrollBy({ left: -1000, behavior: 'smooth' });
    const scrollRight = () => scrollElement?.scrollBy({ left: 1000, behavior: 'smooth' });

    const updateArrowsVisibility = () => {
      if (scrollElement) {
        let maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

        if (maxScrollLeft === 0) {
          maxScrollLeft = 10;
        }

        containerLeft!.style.display = scrollElement.scrollLeft > 0 ? 'flex' : 'none';
        containerRight!.style.display = scrollElement.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
      }
    };

    containerLeft?.addEventListener('click', scrollLeft);
    containerRight?.addEventListener('click', scrollRight);
    scrollElement?.addEventListener('scroll', updateArrowsVisibility);
    window.addEventListener('resize', updateArrowsVisibility);

    updateArrowsVisibility();
  }, []);

  const onMouseEnterContainerAllProductFlashDeals = () => {
    let containerArrowLeft = RefContainerArrowLeft.current as HTMLElement;
    let svgArrowLeft = containerArrowLeft.firstChild as SVGElement;
    containerArrowLeft.style.padding = '15px';
    svgArrowLeft.style.width = '20px';
    svgArrowLeft.style.height = '20px';
    svgArrowLeft.style.fill = '#000000ba';

    let containerArrowRight = RefContainerArrowRight.current as HTMLElement;
    let svgArrowRight = containerArrowRight.firstChild as SVGElement;
    containerArrowRight.style.padding = '15px';
    svgArrowRight.style.width = '20px';
    svgArrowRight.style.height = '20px';
    svgArrowRight.style.fill = '#000000ba';
  };

  const onMouseLeaveContainerAllProductFlashDeals = () => {
    let containerArrowLeft = RefContainerArrowLeft.current as HTMLElement;
    let svgArrowLeft = containerArrowLeft.firstChild as SVGElement;
    containerArrowLeft.style.padding = '10px';
    svgArrowLeft.style.width = '14px';
    svgArrowLeft.style.height = '14px';
    svgArrowLeft.style.fill = '#0000008f';

    let containerArrowRight = RefContainerArrowRight.current as HTMLElement;
    let svgArrowRight = containerArrowRight.firstChild as SVGElement;
    containerArrowRight.style.padding = '10px';
    svgArrowRight.style.width = '14px';
    svgArrowRight.style.height = '14px';
    svgArrowRight.style.fill = '#0000008f';
  };

  return (
    <Styled.ContainerEachCategoryMain
      onMouseEnter={onMouseEnterContainerAllProductFlashDeals}
      onMouseLeave={onMouseLeaveContainerAllProductFlashDeals}
    >
      <Styled.ContainerArrowLeft className="container-arrow-left-category">
        <Styled.Container ref={RefContainerArrowLeft}>
          <SvgArrowLeft />
        </Styled.Container>
      </Styled.ContainerArrowLeft>
      <Styled.ContainerAllCategory ref={imageContainerRef} className="carousel-custom-category">
        {allCategory &&
          allCategory.map((category) => (
            <EachCategory
              key={category.id}
              img={category.imgCategory}
              alt={category.altValue}
              title={category.title}
            />
          ))}
      </Styled.ContainerAllCategory>
      <Styled.ContainerArrowRight className="container-arrow-right-category">
        <Styled.Container ref={RefContainerArrowRight}>
          <SvgArrowRight />
        </Styled.Container>
      </Styled.ContainerArrowRight>
    </Styled.ContainerEachCategoryMain>
  );
};

export default CategoryAllMan;
