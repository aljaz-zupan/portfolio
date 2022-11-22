export function scaleFly(node: HTMLElement, params?: Object) {
    return {
        css: (t: number, u: number) =>
            `transform: translateY(${u * 100}px) scale(${t});`
            
    };
}