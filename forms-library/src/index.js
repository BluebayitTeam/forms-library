import BmetFormUI from './BmetFormUI';

  export default BmetFormUI;

  // Also expose on window for direct script tag usage
  if (typeof window !== 'undefined') {
    window.BmetFormUI = BmetFormUI;
  }
