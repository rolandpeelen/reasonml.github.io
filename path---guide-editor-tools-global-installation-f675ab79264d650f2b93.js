webpackJsonp([51],{"./node_modules/json-loader/index.js!./.cache/json/guide-editor-tools-global-installation.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"What & Why",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:10}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/meta/index.md",childMarkdownRemark:{frontmatter:{title:"Meta",order:1e3}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/meta/project-structure.md",childMarkdownRemark:{frontmatter:{title:"Project Structure",order:0}}}},{node:{relativePath:"guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:20}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{html:'<p><strong>Before setting up the editor plugins</strong>, you need to install the global binaries needed by them.</p>\n<h3 id="recommended-through-npmyarn"><a href="#recommended-through-npmyarn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>(Recommended) Through Npm/Yarn</h3>\n<table>\n<thead>\n<tr>\n<th>Platform</th>\n<th>Install command</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>OSX</strong></td>\n<td><code>npm install -g https://github.com/reasonml/reason-cli/archive/3.0.1-bin-darwin.tar.gz</code></td>\n</tr>\n<tr>\n<td><strong>Linux</strong></td>\n<td><code>npm install -g https://github.com/reasonml/reason-cli/archive/3.0.1-bin-linux.tar.gz</code></td>\n</tr>\n<tr>\n<td><strong>Windows</strong></td>\n<td>Please see \n<a href="https://github.com/reasonml/reasonml.github.io/issues/195">https://github.com/reasonml/reasonml.github.io/issues/195</a></td>\n</tr>\n</tbody>\n</table>\n<p>Note: Bundles are currently large (approximately <code>100MB</code>), but <code>npm</code> will not provide progress while downloading.</p>\n<h3 id="alternative-through-opam"><a href="#alternative-through-opam" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>(Alternative) Through OPAM</h3>\n<p><a href="https://opam.ocaml.org">OPAM</a> is the native package manager for OCaml. If you come from OCaml and don\'t have npm/yarn, you can optionally install this way, but be careful!</p>\n<p><strong>If you\'re on Windows</strong>, please see <a href="https://github.com/reasonml/reasonml.github.io/issues/195">https://github.com/reasonml/reasonml.github.io/issues/195</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code>opam update\nopam switch <span class="hljs-number">4.02</span>.<span class="hljs-number">3</span> <span class="hljs-comment"># mandatory!</span>\nopam install reason.<span class="hljs-number">3.0</span>.<span class="hljs-number">0</span>\nopam install merlin.<span class="hljs-number">2.5</span>.<span class="hljs-number">4</span></code></pre>\n      </div>\n<h3 id="troubleshooting"><a href="#troubleshooting" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Troubleshooting</h3>\n<h4 id="bad-installation"><a href="#bad-installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bad Installation</h4>\n<p>If your installation fails, it might be because you\'re on npm 5.4.0 (<code>npm --version</code>). There was a known bug in npm that\'s fixed in 5.4.2. Upgrade <code>npm</code> and things should work.</p>\n<p>If <em>that</em> fails, try <a href="https://github.com/reasonml/reasonml.github.io/pull/157">https://github.com/reasonml/reasonml.github.io/pull/157</a>. If that succeeds, please upvote that issue. We aren\'t sure it\'s the adequate fix in the meantime.</p>\n<p>Finally, if things still don\'t work, please file an issue at <a href="https://github.com/reasonml/reason-cli/issues">https://github.com/reasonml/reason-cli/issues</a>. Sorry for the trouble.</p>\n<h4 id="editor-plugin-not-working"><a href="#editor-plugin-not-working" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Editor Plugin Not Working</h4>\n<ul>\n<li>\n<p><strong>If you\'re on Windows</strong>, the current editor tooling support for Windows is shaky. Please help us improve it in <a href="https://github.com/reasonml/reasonml.github.io/issues/195">https://github.com/reasonml/reasonml.github.io/issues/195</a>. Thank you!</p>\n</li>\n<li>\n<p>Make sure you restart your editor. Some of them might not pick up your new shell environment (which now includes the newly installed binaries) without one.</p>\n</li>\n<li>\n<p>Try the following:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code><span class="hljs-built_in">which</span> ocamlmerlin refmt ocamlmerlin-reason</code></pre>\n      </div>\n<p>It should spit out three paths that contain the word <code>reason-cli</code> if the <code>reason-cli</code> installation succeeded.</p>\n</li>\n<li>\n<p>Check the Merlin version:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code>ocamlmerlin -version</code></pre>\n      </div>\n<p>It should say "The Merlin toolkit version 2.5.x, for Ocaml 4.02.3". Not OCaml 4.03, not 4.04, etc.</p>\n</li>\n</ul>\n<h4 id="editor-error-message-unbound-module-js-etc"><a href="#editor-error-message-unbound-module-js-etc" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Editor Error Message: Unbound Module <code>Js</code>, Etc.</h4>\n<p>Make sure you\'ve built your project at least once; the diagnosis doesn\'t pick up until after that. The build command varies by project, but is frequently <code>npm run build</code> (which usually calls <code>bsb -make-world</code> under the hood).</p>\n<p>If you\'re on Visual Studio Code, make sure you open the editor at the project\'s root (where <code>package.json</code> and <code>bsconfig.json</code> are). You can do so, for example, by invoking <code>code .</code> in the terminal at the root.</p>',frontmatter:{title:"Global Installation"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/editor-tools/global-installation.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-editor-tools-global-installation-f675ab79264d650f2b93.js.map