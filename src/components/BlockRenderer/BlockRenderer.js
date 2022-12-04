import { theme } from "../../../theme";
import {Cover} from "../Cover";
import {Heading} from "../Heading";
import { Hero } from "../Hero";
import { HomeIntro } from "../HomeIntro";
import { Paragraph } from "../Paragraph";

export const BlockRenderer = ({ blocks }) => {
  return blocks?.map((block) => {
    switch (block.name) {
      
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
        console.log("BLOCK: ", block);
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