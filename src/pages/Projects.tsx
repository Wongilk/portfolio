import { forwardRef } from 'react';
import classes from './Projects.module.css';
import ProjectCard from '../components/Projects/ProjectCard';
import NEWSSTAND from '../imgs/NEWSSTAND.gif';
import KUDOG from '../imgs/KUDOG.png';
import PORTFOLIO from '../imgs/PORTFOLIO.png';
import CARMAKER from '../imgs/CARMAKER.png';
import SPOTLIGHT from '../imgs/SPOTLIGHT.gif';

const projects = [
  {
    index: 0,
    backgroundImg: SPOTLIGHT,
    title: 'SPOTLIGHT',
    shortDesc:
      '사용자가 자신의 최애 장소를 기록한 셀렉션을 공유하고, 이에 대한 검색을 제공하는 지도 중심의 웹 서비스입니다.',
    longDesc:
      '처음 NextJS를 사용해본 프로젝트로 하나의 프로젝트 파일 내 프론트/백 작업을 할 수 있다는 점과 간편한 라우팅/NextAuth와 같이 여러 기본 기능을 제공함에 따라 빠르게 프로젝트를 개발할 수 있었습니다.',
    features: '소셜 로그인, 셀렉션 CRUD/검색, AI기반 셀렉션 추천, 문의하기',
    projectType: '팀 프로젝트',
    stack: 'NEXTJS, TYPESCRIPT, TAILWIND, MARIADB',
    git: 'https://github.com/Programmers-SpotLight/SpotLight',
  },
  {
    index: 1,
    backgroundImg: PORTFOLIO,
    title: 'PORTFOLIO',
    shortDesc: '현재 포트폴리오를 구현한 웹 사이트입니다.',
    longDesc:
      '타입스크립트를 이용해 구현해본 사이트로 타입스크립트의 기초를 다질 수 있었습니다.',
    features:
      '제 소개, 스킬, 그동안의 프로젝트, 학습 기록들을 정리하여 소개하고 있습니다.',
    projectType: '개인 프로젝트',
    stack: 'TYPESCRIPT, REACT',
    git: 'https://github.com/Wongilk/portfolio',
  },
  {
    index: 2,
    backgroundImg: CARMAKER,
    title: '내 차 만들기',
    shortDesc: '내 차 만들기 기획안을 구현한 웹 사이트입니다.',
    longDesc:
      '백엔드&기획&디자인 팀과의 협업을 통해 실무에서의 협업 방식을 터득할 수 있었고, 여러 오류들을 처리하면서 한층 성장할 수 있었던 프로젝트입니다.',
    features:
      '차종 및 차량 옵션 선택, 옵션 고민해보기, 360도 차량 이미지, 위치 기반으로 카마스터 찾기 ',
    projectType: '팀 프로젝트 (6인)',
    stack: 'JAVASCRIPT, REACT, STYLED-COMPONENT, JAVA',
    git: 'https://github.com/softeerbootcamp-2nd/A5-Idle',
  },
  {
    index: 3,
    backgroundImg: NEWSSTAND,
    title: 'NEWS STAND',
    shortDesc: '네이버의 뉴스스탠드를 vanila JS로 구현한 앱입니다.',
    longDesc:
      'vanila JS로 구현하면서 DOM 객체에 대한 이해, 기초적인 CSS&JS 지식을 학습할 수 있었고 REACT와 같은 라이브러리 사용의 이유를 느낄 수 있었습니다.',
    features:
      '자동 롤링 뉴스, 전체 언론사 혹은 구독 언론사별로 뉴스 보기, 그리드 혹은 리스트 뷰로 뉴스 보기, 다크 모드',
    projectType: '개인 프로젝트',
    stack: 'HTML, CSS, JAVASCRIPT',
    git: 'https://github.com/Wongilk/fe-newsstand/tree/two?tab=readme-ov-file',
  },
  {
    index: 4,
    backgroundImg: KUDOG,
    title: 'KUDOG',
    shortDesc: '구독 기반의 웹 쇼핑몰 사이트입니다.',
    longDesc:
      '처음 웹 개발을 접한 후 구현한 사이트로 JS에도 익숙하지 않을 때 \nREACT와 NODEJS의 스택을 접하면서 큰 어려움을 겪은 프로젝트입니다.',
    features:
      '사용자) 회원 가입/로그인, 장바구니, 상품 결제/검색 \n 관리자) 회원 및 상품 정보 관리',
    projectType: '팀 프로젝트 (4인)',
    stack: 'JAVASCRIPT, REACT, REDUX, NODEJS, MONGODB',
    git: 'https://github.com/Wongilk/kudog',
  },
];

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={classes.container} ref={ref}>
      <div className={classes.intro}>Projects</div>

      <div className={classes.underline} />

      <div className={classes.body}>
        {projects.map((project) => (
          <ProjectCard
            key={project.index}
            index={project.index}
            backgroundImg={project.backgroundImg}
            title={project.title}
            features={project.features}
            projectType={project.projectType}
            stack={project.stack}
            shortDesc={project.shortDesc}
            longDesc={project.longDesc}
            git={project.git}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
});
export default Projects;
