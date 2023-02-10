// This is needed to use the "$" symbol and make the overall code less verbose
// const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Load this script after everything else (document is ready)
document.addEventListener('DOMContentLoaded', function () {
  // This is the actual script
  if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    $$('img').forEach((ele) => {
      let src = ele.src
      if (src.includes('webp')) {
        src = src.replace('.webp', '.png')
        ele.src = src
        console.log('webp converted to png')
      }
    })
  }
})
