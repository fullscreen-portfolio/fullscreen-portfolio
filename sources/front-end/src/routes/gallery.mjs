export const get = async ({ params }) => {
  console.log({
    params,
  });

  return {
    body: [
      {
        id: 0,
        sources: [
          // https://dummyimage.com/
          {
            // iPad
            srcset: '/images/909090.730x730.jpeg',
            media: '(max-width: 768px) and (orientation: portrait), (max-height: 768px) and (orientation: landscape)',
            type: 'image/jpeg',
          },
          {
            // iPad Pro
            srcset: '/images/909090.973x973.jpeg',
            media: '(max-width: 1024px) and (orientation: portrait), (max-height: 1024px) and (orientation: landscape)',
            type: 'image/jpeg',
          },
          {
            // 3840x2049
            srcset: '/images/909090.1897x1897.jpeg',
            media: '(min-width: 3840px)',
            type: 'image/jpeg',
          },
          {
            srcset: '/images/909090.2848x2848.jpeg',
            type: 'image/jpeg',
          },
        ],
        img: {
          srcset: '/images/909090.2848x2848.jpeg',
          alt: 'Shopify Merchant, Corrine Anestopoulos',
        },
      },

      {
        id: 1,
        sources: [
          // https://dummyimage.com/
          {
            // iPad
            srcset: '/images/fa08fa.730x730.jpeg',
            media: '(max-width: 768px) and (orientation: portrait), (max-height: 768px) and (orientation: landscape)',
            type: 'image/jpeg',
          },
          {
            // iPad Pro
            srcset: '/images/fa08fa.973x973.jpeg',
            media: '(max-width: 1024px) and (orientation: portrait), (max-height: 1024px) and (orientation: landscape)',
            type: 'image/jpeg',
          },
          {
            // 3840x2049
            srcset: '/images/fa08fa.1897x1897.jpeg',
            media: '(min-width: 3840px)',
            type: 'image/jpeg',
          },
          {
            srcset: '/images/fa08fa.2848x2848.jpeg',
            type: 'image/jpeg',
          },
        ],
        img: {
          srcset: '/images/fa08fa.2848x2848.jpeg',
          alt: 'Shopify Merchant, Corrine Anestopoulos',
        },
      },

      {
        id: 2,
        sources: [
          // https://dummyimage.com/
          {
            // iPad
            srcset: '/images/618cf2.730x730.jpeg',
            media: '(max-width: 768px) and (orientation: portrait), (max-height: 768px) and (orientation: landscape)',
            type: 'image/jpeg',
          },
          {
            // iPad Pro
            srcset: '/images/618cf2.973x973.jpeg',
            media: '(max-width: 1024px) and (orientation: portrait), (max-height: 1024px) and (orientation: landscape)',
            type: 'image/jpeg',
          },
          {
            // 3840x2049
            srcset: '/images/618cf2.1897x1897.jpeg',
            media: '(min-width: 3840px)',
            type: 'image/jpeg',
          },
          {
            srcset: '/images/618cf2.2848x2848.jpeg',
            type: 'image/jpeg',
          },
        ],
        img: {
          srcset: '/images/618cf2.2848x2848.jpeg',
          alt: 'Shopify Merchant, Corrine Anestopoulos',
        },
      },
    ],
  };
};
