from playwright.sync_api import sync_playwright

def verify_homepage():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        # Go to the local development server
        page.goto("http://localhost:3000")
        
        # Wait for the hero section to be visible
        page.wait_for_selector("text=Future Tech Entrepreneur")
        
        # Take a screenshot of the top section
        page.screenshot(path="verification/homepage_hero.png")
        
        # Scroll down to platforms section
        page.evaluate("window.scrollTo(0, 1500)")
        page.wait_for_timeout(2000) # Wait for animations
        
        # Take a screenshot of the platforms section
        page.screenshot(path="verification/homepage_platforms.png")
        
        # Scroll to bottom
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        page.wait_for_timeout(1000)
        
        # Take a screenshot of the footer/contact
        page.screenshot(path="verification/homepage_contact.png")
        
        browser.close()

if __name__ == "__main__":
    verify_homepage()
