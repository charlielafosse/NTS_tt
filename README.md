# NTS tech test

A newsletter sign-up modal :incoming_envelope:

### Technical decisions

- Built with React, styled-components and Parcel bundler.
- [Deployed](https://amazing-kilby-545b5a.netlify.com/) on Netlify - this made it easy for me to try out the site on different devices and check responsive design.

### How to run

- Either check it out on Netlify :point_up:, or to run locally:
  - clone this repo
  - `npm i` for dependencies
  - `npm run start:dev`

### Inspiration

![hiroshi yoshimura nine postcards](<https://img.discogs.com/Ut-0S2-up9sTRgxuTAGEGcVbo6c=/fit-in/600x560/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5111154-1384794249-8344.jpeg.jpg>)

- Hiroshi Yoshimura's album Music for Nine Postcards.
- The idea is for the user to sign up for music newsletters through sending a postcard to NTS.

### Stretch goals/next steps

- **Postcard animation**: it'd be great to have the postcard animate and slide off the screen upon hitting the send button.

- **Accessibility**: I was able to improve accessibility through extra `alt`s, `aria-label`s and `label`s - but going through my site with a screen reader showed that simply using `opacity` to hide elements can throw up problems.
