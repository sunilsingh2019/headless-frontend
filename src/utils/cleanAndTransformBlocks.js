import { v4 as uuid } from "uuid";

export const cleanAndTransformBlocks = (blocksJSON) => {
  const blocks = JSON.parse(blocksJSON);

  const assignId = (b) => {
    if(b?.length > 0){
    b.forEach((block) => {
      block.id = uuid();
      if (block.innerBlocks?.length) {
        assignId(block.innerBlocks);
      }
    });
  }
  };

  assignId(blocks);

  return blocks;
};

// import { v4 as uuid } from "uuid";
// export const cleanAndTransformBlocks = (blocksJSON) => {
//   const blocks = JSON.parse(blocksJSON);

//   const deleteKeys = [
//     'attributesType', 
//     'blockType',
//     'dynamicContent',
//     'originalContent',
//     'saveContent',
//     'postId',
//     'get_parent',
//     'order'

// ];

// const removeUnusedDataAndAssignedId = (b) => {

//   b.forEach((block)=> {
//     block.id = uuid();
//     deleteKeys.forEach((deleteKey) => {
//       delete block[deleteKey];
//     });
//     if(block.innerBlocks?.length){
//       removeUnusedDataAndAssignedId(block.innerBlocks);
//     } else {
//       delete block.innerBlocks;
//     }
//   })
// };

// removeUnusedDataAndAssignedId(blocks);
// return blocks;

//   const assignId = (b) => {
//     b.forEach((block) => {
//       block.id = uuid();
//       if (block.innerBlocks?.length) {
//         assignId(block.innerBlocks);
//       }
//     });
//   };
//   assignId(blocks);
//   return blocks;
// };