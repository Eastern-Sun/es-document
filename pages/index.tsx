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
              <h2 id="quick-start">Quick start<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#quick-start" ></a></h2>
              <p>Looking to quickly add Bootstrap to your project? Use jsDelivr, a free open source CDN. Using a package manager or need to download the source files? <a href="/docs/5.1/getting-started/download/">Head to the downloads page</a>.</p>
              <h3 id="css">CSS<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#css" ></a></h3>
              <p>Copy-paste the stylesheet <code>&lt;link&gt;</code> into your <code>&lt;head&gt;</code> before all other stylesheets to load our CSS.</p>
              <div className="bd-clipboard"><button type="button" className="btn-clipboard" title="" data-bs-original-title="Copy to clipboard">Copy</button></div><div className="highlight"><pre tabIndex={0} className="chroma"><code className="language-html" data-lang="html"><span className="p">&lt;</span><span className="nt">link</span> <span className="na">href</span><span className="o">=</span><span className="s">"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"</span> <span className="na">rel</span><span className="o">=</span><span className="s">"stylesheet"</span> <span className="na">integrity</span><span className="o">=</span><span className="s">"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"</span> <span className="na">crossorigin</span><span className="o">=</span><span className="s">"anonymous"</span><span className="p">&gt;</span>
              </code></pre></div><h3 id="js">JS<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#js" ></a></h3>
              <p>Many of our components require the use of JavaScript to function. Specifically, they require our own JavaScript plugins and <a href="https://popper.js.org/">Popper</a>. Place <strong>one of the following <code>&lt;script&gt;</code>s</strong> near the end of your pages, right before the closing <code>&lt;/body&gt;</code> tag, to enable them.</p>
              <h4 id="bundle">Bundle<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#bundle" ></a></h4>
              <p>Include every Bootstrap JavaScript plugin and dependency with one of our two bundles. Both <code>bootstrap.bundle.js</code> and <code>bootstrap.bundle.min.js</code> include <a href="https://popper.js.org/">Popper</a> for our tooltips and popovers. For more information about what’s included in Bootstrap, please see our <a href="/docs/5.1/getting-started/contents/#precompiled-bootstrap">contents</a> section.</p>
              <div className="bd-clipboard"><button type="button" className="btn-clipboard" title="" data-bs-original-title="Copy to clipboard">Copy</button></div><div className="highlight"><pre tabIndex={0} className="chroma"><code className="language-html" data-lang="html"><span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"</span> <span className="na">integrity</span><span className="o">=</span><span className="s">"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"</span> <span className="na">crossorigin</span><span className="o">=</span><span className="s">"anonymous"</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span>
              </code></pre></div><h4 id="separate">Separate<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#separate" ></a></h4>
              <p>If you decide to go with the separate scripts solution, Popper must come first (if you’re using tooltips or popovers), and then our JavaScript plugins.</p>
              <div className="bd-clipboard"><button type="button" className="btn-clipboard" title="" data-bs-original-title="Copy to clipboard">Copy</button></div><div className="highlight"><pre tabIndex={0} className="chroma"><code className="language-html" data-lang="html"><span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">"https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"</span> <span className="na">integrity</span><span className="o">=</span><span className="s">"sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"</span> <span className="na">crossorigin</span><span className="o">=</span><span className="s">"anonymous"</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span>
                <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"</span> <span className="na">integrity</span><span className="o">=</span><span className="s">"sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"</span> <span className="na">crossorigin</span><span className="o">=</span><span className="s">"anonymous"</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span>
              </code></pre></div><h4 id="modules">Modules<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#modules" ></a></h4>
              <p>If you use <code>&lt;script type="module"&gt;</code>, please refer to our <a href="/docs/5.1/getting-started/javascript/#using-bootstrap-as-a-module">using Bootstrap as a module</a> section.</p>
              <h4 id="components">Components<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#components" ></a></h4>
              <p>Curious which components explicitly require our JavaScript and Popper? Click the show components link below. If you’re at all unsure about the general page structure, keep reading for an example page template.</p>
              <details>
                <summary className="text-primary mb-3">Show components requiring JavaScript</summary>
                <ul>
                  <li>Alerts for dismissing</li>
                  <li>Buttons for toggling states and checkbox/radio functionality</li>
                  <li>Carousel for all slide behaviors, controls, and indicators</li>
                  <li>Collapse for toggling visibility of content</li>
                  <li>Dropdowns for displaying and positioning (also requires <a href="https://popper.js.org/">Popper</a>)</li>
                  <li>Modals for displaying, positioning, and scroll behavior</li>
                  <li>Navbar for extending our Collapse plugin to implement responsive behavior</li>
                  <li>Offcanvases for displaying, positioning, and scroll behavior</li>
                  <li>Toasts for displaying and dismissing</li>
                  <li>Tooltips and popovers for displaying and positioning (also requires <a href="https://popper.js.org/">Popper</a>)</li>
                  <li>Scrollspy for scroll behavior and navigation updates</li>
                </ul>

              </details>
              <h2 id="starter-template">Starter template<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#starter-template" ></a></h2>
              <p>Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:</p>
              <div className="bd-clipboard"><button type="button" className="btn-clipboard" title="" data-bs-original-title="Copy to clipboard">Copy</button></div><div className="highlight"><pre tabIndex={0} className="chroma"><code className="language-html" data-lang="html"><span className="cp">&lt;!doctype html&gt;</span>
                <span className="p">&lt;</span><span className="nt">html</span> <span className="na">lang</span><span className="o">=</span><span className="s">"en"</span><span className="p">&gt;</span>
                <span className="p">&lt;</span><span className="nt">head</span><span className="p">&gt;</span>
                <span className="c">&lt;!-- Required meta tags --&gt;</span>
                <span className="p">&lt;</span><span className="nt">meta</span> <span className="na">charset</span><span className="o">=</span><span className="s">"utf-8"</span><span className="p">&gt;</span>
                <span className="p">&lt;</span><span className="nt">meta</span> <span className="na">name</span><span className="o">=</span><span className="s">"viewport"</span> <span className="na">content</span><span className="o">=</span><span className="s">"width=device-width, initial-scale=1"</span><span className="p">&gt;</span>

                <span className="c">&lt;!-- Bootstrap CSS --&gt;</span>
                <span className="p">&lt;</span><span className="nt">link</span> <span className="na">href</span><span className="o">=</span><span className="s">"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"</span> <span className="na">rel</span><span className="o">=</span><span className="s">"stylesheet"</span> <span className="na">integrity</span><span className="o">=</span><span className="s">"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"</span> <span className="na">crossorigin</span><span className="o">=</span><span className="s">"anonymous"</span><span className="p">&gt;</span>

                <span className="p">&lt;</span><span className="nt">title</span><span className="p">&gt;</span>Hello, world!<span className="p">&lt;/</span><span className="nt">title</span><span className="p">&gt;</span>
                <span className="p">&lt;/</span><span className="nt">head</span><span className="p">&gt;</span>
                <span className="p">&lt;</span><span className="nt">body</span><span className="p">&gt;</span>
                <span className="p">&lt;</span><span className="nt">h1</span><span className="p">&gt;</span>Hello, world!<span className="p">&lt;/</span><span className="nt">h1</span><span className="p">&gt;</span>

                <span className="c">&lt;!-- Optional JavaScript; choose one of the two! --&gt;</span>

                <span className="c">&lt;!-- Option 1: Bootstrap Bundle with Popper --&gt;</span>
                <span className="p">&lt;</span><span className="nt">script</span> <span className="na">src</span><span className="o">=</span><span className="s">"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"</span> <span className="na">integrity</span><span className="o">=</span><span className="s">"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"</span> <span className="na">crossorigin</span><span className="o">=</span><span className="s">"anonymous"</span><span className="p">&gt;&lt;/</span><span className="nt">script</span><span className="p">&gt;</span>

                <span className="c">&lt;!-- Option 2: Separate Popper and Bootstrap JS --&gt;</span>
                <span className="c">&lt;!--
                </span><span className="c">    &lt;script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"&gt;&lt;/script&gt;
                </span><span className="c">    &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"&gt;&lt;/script&gt;
                </span><span className="c">    --&gt;</span>
                <span className="p">&lt;/</span><span className="nt">body</span><span className="p">&gt;</span>
                <span className="p">&lt;/</span><span className="nt">html</span><span className="p">&gt;</span>
              </code></pre></div><p>For next steps, visit the <a href="/docs/5.1/layout/grid/">Layout docs</a> or <a href="/docs/5.1/examples/">our official examples</a> to start laying out your site’s content and components.</p>
              <h2 id="important-globals">Important globals<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#important-globals" ></a></h2>
              <p>Bootstrap employs a handful of important global styles and settings that you’ll need to be aware of when using it, all of which are almost exclusively geared towards the <em>normalization</em> of cross browser styles. Let’s dive in.</p>
              <h3 id="html5-doctype">HTML5 doctype<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#html5-doctype" ></a></h3>
              <p>Bootstrap requires the use of the HTML5 doctype. Without it, you’ll see some funky incomplete styling, but including it shouldn’t cause any considerable hiccups.</p>
              <div className="bd-clipboard"><button type="button" className="btn-clipboard" title="" data-bs-original-title="Copy to clipboard">Copy</button></div><div className="highlight"><pre tabIndex={0} className="chroma"><code className="language-html" data-lang="html"><span className="cp">&lt;!doctype html&gt;</span>
                <span className="p">&lt;</span><span className="nt">html</span> <span className="na">lang</span><span className="o">=</span><span className="s">"en"</span><span className="p">&gt;</span>
                ...
                <span className="p">&lt;/</span><span className="nt">html</span><span className="p">&gt;</span>
              </code></pre></div><h3 id="responsive-meta-tag">Responsive meta tag<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#responsive-meta-tag" ></a></h3>
              <p>Bootstrap is developed <em>mobile first</em>, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, <strong>add the responsive viewport meta tag</strong> to your <code>&lt;head&gt;</code>.</p>
              <div className="bd-clipboard"><button type="button" className="btn-clipboard" title="" data-bs-original-title="Copy to clipboard">Copy</button></div><div className="highlight"><pre tabIndex={0} className="chroma"><code className="language-html" data-lang="html"><span className="p">&lt;</span><span className="nt">meta</span> <span className="na">name</span><span className="o">=</span><span className="s">"viewport"</span> <span className="na">content</span><span className="o">=</span><span className="s">"width=device-width, initial-scale=1"</span><span className="p">&gt;</span>
              </code></pre></div><p>You can see an example of this in action in the <a href="#starter-template">starter template</a>.</p>
              <h3 id="box-sizing">Box-sizing<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#box-sizing" ></a></h3>
              <p>For more straightforward sizing in CSS, we switch the global <code>box-sizing</code> value from <code>content-box</code> to <code>border-box</code>. This ensures <code>padding</code> does not affect the final computed width of an element, but it can cause problems with some third-party software like Google Maps and Google Custom Search Engine.</p>
              <p>On the rare occasion you need to override it, use something like the following:</p>
              <div className="bd-clipboard"><button type="button" className="btn-clipboard" title="" data-bs-original-title="Copy to clipboard">Copy</button></div><div className="highlight"><pre tabIndex={0} className="chroma"><code className="language-css" data-lang="css"><span className="p">.</span><span className="nc">selector-for-some-widget</span> <span className="p"></span>
                <span className="k">box-sizing</span><span className="p">:</span> <span className="kc">content-box</span><span className="p">;</span>
                <span className="p"></span>
              </code></pre></div><p>With the above snippet, nested elements—including generated content via <code>::before</code> and <code>::after</code>—will all inherit the specified <code>box-sizing</code> for that <code>.selector-for-some-widget</code>.</p>
              <p>Learn more about <a href="https://css-tricks.com/box-sizing/">box model and sizing at CSS Tricks</a>.</p>
              <h3 id="reboot">Reboot<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#reboot" ></a></h3>
              <p>For improved cross-browser rendering, we use <a href="/docs/5.1/content/reboot/">Reboot</a> to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.</p>
              <h2 id="community">Community<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#community" ></a></h2>
              <p>Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.</p>
              <ul>
                <li>Read and subscribe to <a href="https://blog.getbootstrap.com/">The Official Bootstrap Blog</a>.</li>
                <li>Join <a href="https://bootstrap-slack.herokuapp.com/">the official Slack room</a>.</li>
                <li>Chat with fellow Bootstrappers in IRC. On the <code>irc.libera.chat</code> server, in the <code>#bootstrap</code> channel.</li>
                <li>Implementation help may be found at Stack Overflow (tagged <a href="https://stackoverflow.com/questions/tagged/bootstrap-5"><code>bootstrap-5</code></a>).</li>
                <li>Developers should use the keyword <code>bootstrap</code> on packages that modify or add to the functionality of Bootstrap when distributing through <a href="https://www.npmjs.com/search?q=keywords:bootstrap">npm</a> or similar delivery mechanisms for maximum discoverability.</li>
              </ul>
              <p>You can also follow <a href="https://twitter.com/getbootstrap">@getbootstrap on Twitter</a> for the latest gossip and awesome music videos.</p>

            </div>
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default Home
