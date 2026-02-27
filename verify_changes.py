from playwright.sync_api import sync_playwright

def verify_project_navigation():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # 1. Navigate to the projects page (simulating clicking on a project from home)
        # We'll use one of the prrendered paths we saw in the build output
        page.goto("http://localhost:4321/projects/rcl-daily")

        # 2. Take a screenshot of the top of the project page to verify layout
        page.screenshot(path="project_page_top.png")

        # 3. Verify the "Back to Projects" link
        # It should link to /#projects
        back_link = page.get_by_role("link", name="Back to Projects")
        href = back_link.get_attribute("href")
        print(f"Back link href: {href}")

        # 4. Verify the Logo link
        # It should link to /
        logo_link = page.get_by_role("link", name="Jimmy Liu")
        logo_href = logo_link.get_attribute("href")
        print(f"Logo link href: {logo_href}")

        # 5. Verify Navigation Links
        # Projects link should be /#projects
        projects_nav = page.get_by_role("navigation").get_by_role("link", name="Projects")
        projects_href = projects_nav.get_attribute("href")
        print(f"Projects nav href: {projects_href}")

        browser.close()

if __name__ == "__main__":
    verify_project_navigation()
