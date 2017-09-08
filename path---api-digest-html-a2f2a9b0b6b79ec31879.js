webpackJsonp([286],{"./node_modules/json-loader/index.js!./.cache/json/api-digest-html.json":function(e,n){e.exports={data:{file:{relativePath:"api/Digest.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Complex.html" title="Complex">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Filename.html" title="Filename">Next</a>\n</div>\n<h1>Module <a href="type_Digest.html">Digest</a></h1>\n\n<pre><span class="keyword">module</span> Digest: sig .. end</pre><div class="info module top">\nMD5 message digest.\n<p>\n\n   This module provides functions to compute 128-bit &apos;digests&apos; of\n   arbitrary-length strings or files. The digests are of cryptographic\n   quality: it is very hard, given a digest, to forge a string having\n   that digest. The algorithm used is MD5. This module should not be\n   used for secure and sensitive cryptographic applications. For these\n   kind of applications more recent and stronger cryptographic\n   primitives should be used instead.<br>\n</p></div>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> t = string;\n</pre>\n<div class="info ">\nThe type of digests: 16-character strings.<br>\n</div>\n\n\n<pre><span class="keyword">let</span> compare: t =&gt; t =&gt; int;\n</pre><div class="info ">\nThe comparison function for 16-character digest, with the same\n    specification as <a href="Pervasives.html#VALcompare"><code class="code">Pervasives.compare</code></a> and the implementation\n    shared with <a href="String.html#VALcompare"><code class="code">String.compare</code></a>. Along with the type <code class="code">t</code>, this\n    function <code class="code">compare</code> allows the module <code class="code">Digest</code> to be passed as\n    argument to the functors <a href="Set.Make.html"><code class="code">Set.Make</code></a> and <a href="Map.Make.html"><code class="code">Map.Make</code></a>.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n<pre><span class="keyword">let</span> string: string =&gt; t;\n</pre><div class="info ">\nReturn the digest of the given string.<br>\n</div>\n\n<pre><span class="keyword">let</span> bytes: bytes =&gt; t;\n</pre><div class="info ">\nReturn the digest of the given byte sequence.<br>\n<b>Since</b> 4.02.0<br>\n</div>\n\n<pre><span class="keyword">let</span> substring: string =&gt; int =&gt; int =&gt; t;\n</pre><div class="info ">\n<code class="code">Digest.substring s ofs len</code> returns the digest of the substring\n   of <code class="code">s</code> starting at index <code class="code">ofs</code> and containing <code class="code">len</code> characters.<br>\n</div>\n\n<pre><span class="keyword">let</span> subbytes: bytes =&gt; int =&gt; int =&gt; t;\n</pre><div class="info ">\n<code class="code">Digest.subbytes s ofs len</code> returns the digest of the subsequence\n    of <code class="code">s</code> starting at index <code class="code">ofs</code> and containing <code class="code">len</code> bytes.<br>\n<b>Since</b> 4.02.0<br>\n</div>\n\n<pre><span class="keyword">let</span> channel: Pervasives.in_channel =&gt; int =&gt; t;\n</pre><div class="info ">\nIf <code class="code">len</code> is nonnegative, <code class="code">Digest.channel ic len</code> reads <code class="code">len</code>\n   characters from channel <code class="code">ic</code> and returns their digest, or raises\n   <code class="code">End_of_file</code> if end-of-file is reached before <code class="code">len</code> characters\n   are read.  If <code class="code">len</code> is negative, <code class="code">Digest.channel ic len</code> reads\n   all characters from <code class="code">ic</code> until end-of-file is reached and return\n   their digest.<br>\n</div>\n\n<pre><span class="keyword">let</span> file: string =&gt; t;\n</pre><div class="info ">\nReturn the digest of the file whose name is given.<br>\n</div>\n\n<pre><span class="keyword">let</span> output: Pervasives.out_channel =&gt; t =&gt; unit;\n</pre><div class="info ">\nWrite a digest on the given output channel.<br>\n</div>\n\n<pre><span class="keyword">let</span> input: Pervasives.in_channel =&gt; t;\n</pre><div class="info ">\nRead a digest from the given input channel.<br>\n</div>\n\n<pre><span class="keyword">let</span> to_hex: t =&gt; string;\n</pre><div class="info ">\nReturn the printable hexadecimal representation of the given digest.<br>\n</div>\n\n<pre><span class="keyword">let</span> from_hex: string =&gt; t;\n</pre><div class="info ">\nConvert a hexadecimal representation back into the corresponding digest.\n   Raise <code class="code">Invalid_argument</code> if the argument is not exactly 32 hexadecimal\n   characters.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Digest.html"}}}});
//# sourceMappingURL=path---api-digest-html-a2f2a9b0b6b79ec31879.js.map