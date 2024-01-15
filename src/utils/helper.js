/**
 * Returns the breakpoint's width
 * @param breakpoint - Configured breakpoints: xs sm md lg xl 2xl
 * @returns width - Width of the breakpoint
 */

export const getBreakpointsWidth = (breakpoint) => {
    // @ts-ignore
    return +fullConfig?.theme?.screens[breakpoint].slice(0, -2);
    // ! Property 'sm' does not exist on type 'ResolvableTo<ScreensConfig>'
  };
  
  /**
   * Returns a unique id
   * @returns {String} Unique id format id123..
   */
  
  export const getId = () => `id${Math.random().toString(16).slice(2)}`;