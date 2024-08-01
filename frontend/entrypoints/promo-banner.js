// assets/promo-banner.js
export function promoBanner() {
  document.addEventListener('DOMContentLoaded', function() {
    const banners = document.querySelectorAll('.promo-banner');
    
    // Get the discount code and utm medium from cookies
    const cookieDiscountCode = getCookie('discount_code');
    const cookieUtmMedium = decodeURIComponent(getCookie('_shopify_sa_p'));
    const utmParam = new URLSearchParams(cookieUtmMedium);
    
    // Determine which banner should be shown
    let bannerToShow = null;
  
    banners.forEach(function(banner) {
      const discountCode = banner.dataset.discountCode;
      const utmMedium = banner.dataset.utmMedium;
      const cookieMatch = discountCode === cookieDiscountCode;
      const utmMediumMatch = utmParam.get('utm_medium') === utmMedium;
      const isBannerClosed = localStorage.getItem('promo-banner-closed-' + discountCode) === 'true';
  
      if (cookieMatch || utmMediumMatch) {
        if (!isBannerClosed && !bannerToShow) {
          bannerToShow = banner;
        }
      } else {
        banner.classList.add('tw-hidden');
        if (!isBannerClosed) {
          banner.classList.add('unclosed-banner');
        }
      }
  
      banner.querySelector('.close-btn').addEventListener('click', function() {
        banner.classList.add('tw-hidden');
        banner.classList.remove('tw-block');
        localStorage.setItem('promo-banner-closed-' + discountCode, 'true');
      });
    });
  
    // Show the appropriate banner
    const unclosedBanners = document.querySelectorAll('.promo-banner.unclosed-banner');
    if (bannerToShow) {
      bannerToShow.classList.remove('tw-hidden');
      bannerToShow.classList.add('tw-block');
    } else if (unclosedBanners.length > 0) {
      const lastUnclosedBanner = unclosedBanners[unclosedBanners.length - 1];
      lastUnclosedBanner.classList.remove('tw-hidden');
      lastUnclosedBanner.classList.add('tw-block');
      if(getCookie('discount_code') != lastUnclosedBanner.dataset.discountCode) setCookie('discount_code', lastUnclosedBanner.dataset.discountCode, 7);
    }

    // Helper function to get cookie value by name
    function getCookie(name) {
      let value = `; ${document.cookie}`;
      let parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    }
    
    //Helper function to set cookie value
    function setCookie(name, value, days) {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
  });
}
  