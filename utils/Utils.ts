import { Page } from '@playwright/test';

export const isDesktopViewport = (page: Page): boolean => {
    const size = page.viewportSize()

    // Verifica se 'size' não é nulo antes de acessar 'width'
    return size !== null && size.width >= 600
}