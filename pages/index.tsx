import type { NextPage } from 'next'
import Layout from '../components/layout'
import LeftMenu from '../components/leftMenu'

const Home: NextPage = () => {
  return (
    <Layout pageTile={'Trang chủ'}>
      <div className="container-fluid">
        <div className="row">
          <LeftMenu></LeftMenu>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div
              className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Trang chủ</h1>
            </div>
            <h4>Nội dung tài liệu, hoặc trang giới thiệu</h4>
            <div className="bd-content ps-lg-4">
              <h2 id="team">Team<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#team"></a></h2>
              <p>Bootstrap is maintained by a <a href="https://github.com/orgs/twbs/people">small team of developers</a> on GitHub. We’re actively looking to grow this team and would love to hear from you if you’re excited about CSS at scale, writing and maintaining vanilla JavaScript plugins, and improving build tooling processes for frontend code.</p>
              <h2 id="history">History<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#history" ></a></h2>
              <p>Originally created by a designer and a developer at Twitter, Bootstrap has become one of the most popular front-end frameworks and open source projects in the world.</p>
              <p>Bootstrap was created at Twitter in mid-2010 by <a href="https://twitter.com/mdo">@mdo</a> and <a href="https://twitter.com/fat">@fat</a>. Prior to being an open-sourced framework, Bootstrap was known as <em>Twitter Blueprint</em>. A few months into development, Twitter held its <a href="https://blog.twitter.com/engineering/en_us/a/2010/hack-week.html">first Hack Week</a> and the project exploded as developers of all skill levels jumped in without any external guidance. It served as the style guide for internal tools development at the company for over a year before its public release, and continues to do so today.</p>
              <p>Originally <a href="https://blog.twitter.com/developer/en_us/a/2011/bootstrap-twitter.html">released</a> on <time >Friday, August 19, 2011</time>, we’ve since had over <a href="https://github.com/twbs/bootstrap/releases">twenty releases</a>, including two major rewrites with v2 and v3. With Bootstrap 2, we added responsive functionality to the entire framework as an optional stylesheet. Building on that with Bootstrap 3, we rewrote the library once more to make it responsive by default with a mobile first approach.</p>
              <p>With Bootstrap 4, we once again rewrote the project to account for two key architectural changes: a migration to Sass and the move to CSS’s flexbox. Our intention is to help in a small way to move the web development community forward by pushing for newer CSS properties, fewer dependencies, and new technologies across more modern browsers.</p>
              <p>Our latest release, Bootstrap 5, focuses on improving v4’s codebase with as few major breaking changes as possible. We improved existing features and components, removed support for older browsers, dropped jQuery for regular JavaScript, and embraced more future-friendly technologies like CSS custom properties as part of our tooling.</p>
              <h2 id="get-involved">Get involved<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#get-involved" ></a></h2>
              <p>Get involved with Bootstrap development by <a href="https://github.com/twbs/bootstrap/issues/new">opening an issue</a> or submitting a pull request. Read our <a href="https://github.com/twbs/bootstrap/blob/v5.1.3/.github/CONTRIBUTING.md">contributing guidelines</a> for information on how we develop.</p>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default Home
