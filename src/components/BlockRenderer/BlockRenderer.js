import { theme } from "../../../theme";
import AboutMeArea from "../AboutMe/AboutMeArea";
import { Articles } from "../Articles";
import { Brands } from "../Brands";
import { Breadcrumbs } from "../Breadcrumbs";
import ContactArea from "../ContactArea/ContactArea";
import {Cover} from "../Cover";
import { Cta } from "../Cta";
import { FormsPree } from "../FormsPree";
import { FreeText } from "../FreeText";
import { Gallery } from "../Gallery";
import {Heading} from "../Heading";
import { Hero } from "../Hero";
import { HomeIntro } from "../HomeIntro";
import { Paragraph } from "../Paragraph";
import { ProjectIntro } from "../ProjectIntro";
import { Projects } from "../Projects";
import { ProjectTab } from "../ProjectTab";
import { Reviews } from "../Reviews";
import { Service } from "../Service";
import { Step } from "../Step";
import Tab from "../Tab/AboutMeTabs";

export const BlockRenderer = ({ blocks }) => {
  console.warn("blocks", blocks);

  return blocks.map((block) => {
    switch (block.name) {
      case "acf/portfolio-intro-module": {
        return (
            <ProjectIntro
              key={block.id}
              banner={block?.attributes?.data?.banner}
              heading={block?.attributes?.data?.heading}
              listItem={block?.attributes?.data}
             
            />
        );
      }
      case "acf/image-module": {
        return (
            <Gallery
              key={block.id}
              imageList={block?.attributes?.data}
             
            />
        );
      }
      case "acf/step-module": {
        return (
            <Step
              key={block.id}
              heading={block?.attributes?.data?.heading}
              blurb={block?.attributes?.data?.blurb}
              step={block?.attributes?.data}
            />
        );
      }
      case "acf/free-text-module": {
        return (
            <FreeText
              key={block.id}
              heading={block?.attributes?.data?.heading}
              blurb={block?.attributes?.data?.blurb}
            />
        );
      }
      case "acf/formspree-module": {
        return (
            <FormsPree
              key={block.id}
              form_id={block?.attributes?.data?.form_id } 
              heading={block?.attributes?.data?.heading}
              background_color={block?.attributes?.data?.background_color}
            />
        );
      }
      case "acf/contact-us-module": {
        return (
            <ContactArea 
              key={block.id}
              formid={block?.attributes?.data?.formid } 
              email={block?.attributes?.data?.email } 
              facebook={block?.attributes?.data?.facebook } 
              form_blurb={block?.attributes?.data?.form_blurb } 
              form_heading={block?.attributes?.data?.form_heading } 
              instagram={block?.attributes?.data?.instagram } 
              linkedin={block?.attributes?.data?.linkedin } 
              phone={block?.attributes?.data?.phone } 
              twitter={block?.attributes?.data?.twitter } 
      
            />
        );
      }
      case "acf/project-tab-module": {
        return (
            <ProjectTab 
              key={block.id}    
              projects={block?.attributes?.data?.projects}    
            />
        );
      }
      case "acf/brands-module": {
        return (
            <Brands 
              key={block.id}
              brands={block?.attributes?.data}
             
            />
        );
      }
      case "acf/cta-module": {
        console.warn("cta", blocks);
        return (
            <Cta 
              key={block.id}
              blurb={block?.attributes?.data?.blurb}
              heading={block?.attributes?.data?.heading}
              link={block?.attributes?.data?.link}
            />
        );
      }
      case "acf/review-module": {
        console.warn("revies", blocks);
        return (
            <Reviews 
              key={block.id}
              heading={block?.attributes?.data?.heading}
              select_review={block?.attributes?.data?.select_review}
            />
        );
      }
      case "acf/article-module": {
        console.warn("article", blocks);
        return (
            <Articles 
              key={block.id}
              heading={block?.attributes?.data?.heading}
              articles={block?.attributes?.data?.article}
              link={block?.attributes?.data?.link}
            />
        );
      }
      case "acf/tab-module": {
        return (
            <Tab 
              key={block.id}
              TabData={block.attributes?.data}
            />
        );
      }
      case "acf/about-me-module": {
        return (
          <>
            <AboutMeArea 
            key={block.id}
            email={block?.attributes?.data?.email}
            enable__disable_module={block?.attributes?.data?.enable__disable_module}
            experience={block?.attributes?.data?.experience}
            expertise={block?.attributes?.data?.expertise}

            facebook={block?.attributes?.data?.facebook}
            instagram={block?.attributes?.data?.instagram}
            linkedin={block?.attributes?.data?.linkedin}
            twitter={block?.attributes?.data?.linkedin}

            name={block?.attributes?.data?.name}
            phone={block?.attributes?.data?.phone}
            position={block?.attributes?.data?.position}
            profile_image={block?.attributes?.data?.profile_image}
            />
          </>
        );
      }
      case "acf/breadcrumbs-module": {
        return (
          <>
            <Breadcrumbs 
            key={block.id}
            title={block?.attributes?.data?.title}
            page_title={block?.attributes?.data?.select_page_title}
            />
          </>
        );
      }
      case "acf/projects-module": {
        return (
          <Projects 
            key={block.id}
            projects={block?.attributes?.data?.projects}
          />
        );
      }
      case "acf/services-module": {
        return (
          <Service 
            key={block.id}
            heading={block.attributes.data?.heading}
            sub_heading={block.attributes.data?.sub_heading}
            select_services={block.attributes.data?.select_services}
          />
        );
      }
      case "core/paragraph": {
        return (
          <Paragraph 
          key={block.id}
          level={block.attributes.level}
          content={block.attributes.content}
          textAlign={block.attributes.textAlign}
          textColor={
            theme[block.attributes.textColor] ||
            block.attributes.style?.color?.text
          }
          />
        );
      }
      case "acf/hero-module": {
        return (
          <Hero 
            key={block.id}
            heading_1={block.attributes.data?.heading_1}
            enable_disable_module={block.attributes.data?.enable_disable_module}
            heading_2={block.attributes.data?.heading_2}
            sub_heading={block.attributes.data?.sub_heading}
            hero_image={block.attributes.data?.hero_image?.url}
            title={block.attributes.data.button?.title}
            url={block.attributes.data.button?.url || "/"}
            target={block.attributes.data.button?.target}
          />
        );
      }
      case "acf/home-intro-module": {
        return (
          <HomeIntro 
          key={block.id}
          listItems={block.attributes?.data}
          heroImages={block.attributes?.data}
          blurb={block.attributes.data?.blurb}
          heading_cta={block.attributes.data?.heading_cta}
          heading={block.attributes.data?.heading}
          blurb_cta={block.attributes.data?.blurb_cta}
          icon={block.attributes.data?.icon}
          enable_disable_module={block.attributes.data?.enable_disable_module}
          />
        );
      }
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
          />
        );
      }
      case "core/cover": {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      default: {
        console.log("UNKNOWN: ", block);
        return null;
      }
     
    }
  });
};