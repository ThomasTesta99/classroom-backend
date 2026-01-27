import arcjet, { detectBot, shield, slidingWindow } from "@arcjet/node";

if(!process.env.ARCJET_KEY && process.env.NODE_ENV !== 'test'){
    throw new Error('Arcjet key is required');
}

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE", 
      allow: [
        "CATEGORY:SEARCH_ENGINE", 
      ],
    }),
    slidingWindow({
        mode: "LIVE", 
        interval: '2s', 
        max: 5,
    })
  ],
});

export default aj;