webpackJsonp([301],{"./node_modules/json-loader/index.js!./.cache/json/api-bigarray-array-2-html.json":function(a,e){a.exports={data:{file:{relativePath:"api/Bigarray.Array2.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Bigarray.Array1.html" title="Bigarray.Array1">Previous</a>\n&#xA0;<a class="up" href="Bigarray.html" title="Bigarray">Up</a>\n&#xA0;<a class="post" href="Bigarray.Array3.html" title="Bigarray.Array3">Next</a>\n</div>\n<h1>Module <a href="type_Bigarray.Array2.html">Bigarray.Array2</a></h1>\n\n<pre><span class="keyword">module</span> Array2: sig .. end</pre><div class="info module top">\nTwo-dimensional arrays. The <code class="code">Array2</code> structure provides operations\n   similar to those of <a href="Bigarray.Genarray.html"><code class="code">Bigarray.Genarray</code></a>, but specialized to the\n   case of two-dimensional arrays.<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> t &apos;a &apos;b &apos;c;\n</pre>\n<div class="info ">\nThe type of two-dimensional big arrays whose elements have\n     OCaml type <code class="code">&apos;a</code>, representation kind <code class="code">&apos;b</code>, and memory layout <code class="code">&apos;c</code>.<br>\n</div>\n\n\n<pre><span class="keyword">let</span> create: Bigarray.kind &apos;a &apos;b =&gt; Bigarray.layout &apos;c =&gt; int =&gt; int =&gt; t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\n<code class="code">Array2.create kind layout dim1 dim2</code> returns a new bigarray of\n     two dimension, whose size is <code class="code">dim1</code> in the first dimension\n     and <code class="code">dim2</code> in the second dimension.  <code class="code">kind</code> and <code class="code">layout</code>\n     determine the array element kind and the array layout\n     as described for <a href="Bigarray.Genarray.html#VALcreate"><code class="code">Bigarray.Genarray.create</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> dim1: t &apos;a &apos;b &apos;c =&gt; int;\n</pre><div class="info ">\nReturn the first dimension of the given two-dimensional big array.<br>\n</div>\n\n<pre><span class="keyword">let</span> dim2: t &apos;a &apos;b &apos;c =&gt; int;\n</pre><div class="info ">\nReturn the second dimension of the given two-dimensional big array.<br>\n</div>\n\n<pre><span class="keyword">let</span> kind: t &apos;a &apos;b &apos;c =&gt; Bigarray.kind &apos;a &apos;b;\n</pre><div class="info ">\nReturn the kind of the given big array.<br>\n</div>\n\n<pre><span class="keyword">let</span> layout: t &apos;a &apos;b &apos;c =&gt; Bigarray.layout &apos;c;\n</pre><div class="info ">\nReturn the layout of the given big array.<br>\n</div>\n\n<pre><span class="keyword">let</span> get: t &apos;a &apos;b &apos;c =&gt; int =&gt; int =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">Array2.get a x y</code>, also written <code class="code">a.{x,y}</code>,\n     returns the element of <code class="code">a</code> at coordinates (<code class="code">x</code>, <code class="code">y</code>).\n     <code class="code">x</code> and <code class="code">y</code> must be within the bounds\n     of <code class="code">a</code>, as described for <a href="Bigarray.Genarray.html#VALget"><code class="code">Bigarray.Genarray.get</code></a>;\n     otherwise, <code class="code">Invalid_argument</code> is raised.<br>\n</div>\n\n<pre><span class="keyword">let</span> set: t &apos;a &apos;b &apos;c =&gt; int =&gt; int =&gt; &apos;a =&gt; unit;\n</pre><div class="info ">\n<code class="code">Array2.set a x y v</code>, or alternatively <code class="code">a.{x,y} &lt;- v</code>,\n     stores the value <code class="code">v</code> at coordinates (<code class="code">x</code>, <code class="code">y</code>) in <code class="code">a</code>.\n     <code class="code">x</code> and <code class="code">y</code> must be within the bounds of <code class="code">a</code>,\n     as described for <a href="Bigarray.Genarray.html#VALset"><code class="code">Bigarray.Genarray.set</code></a>;\n     otherwise, <code class="code">Invalid_argument</code> is raised.<br>\n</div>\n\n<pre><span class="keyword">let</span> sub_left: t &apos;a &apos;b Bigarray.c_layout =&gt; int =&gt; int =&gt; t &apos;a &apos;b Bigarray.c_layout;\n</pre><div class="info ">\nExtract a two-dimensional sub-array of the given two-dimensional\n     big array by restricting the first dimension.\n     See <a href="Bigarray.Genarray.html#VALsub_left"><code class="code">Bigarray.Genarray.sub_left</code></a> for more details.\n     <code class="code">Array2.sub_left</code> applies only to arrays with C layout.<br>\n</div>\n\n<pre><span class="keyword">let</span> sub_right: t &apos;a &apos;b Bigarray.fortran_layout =&gt; int =&gt; int =&gt; t &apos;a &apos;b Bigarray.fortran_layout;\n</pre><div class="info ">\nExtract a two-dimensional sub-array of the given two-dimensional\n     big array by restricting the second dimension.\n     See <a href="Bigarray.Genarray.html#VALsub_right"><code class="code">Bigarray.Genarray.sub_right</code></a> for more details.\n     <code class="code">Array2.sub_right</code> applies only to arrays with Fortran layout.<br>\n</div>\n\n<pre><span class="keyword">let</span> slice_left: t &apos;a &apos;b Bigarray.c_layout =&gt; int =&gt; Bigarray.Array1.t &apos;a &apos;b Bigarray.c_layout;\n</pre><div class="info ">\nExtract a row (one-dimensional slice) of the given two-dimensional\n     big array.  The integer parameter is the index of the row to\n     extract.  See <a href="Bigarray.Genarray.html#VALslice_left"><code class="code">Bigarray.Genarray.slice_left</code></a> for more details.\n     <code class="code">Array2.slice_left</code> applies only to arrays with C layout.<br>\n</div>\n\n<pre><span class="keyword">let</span> slice_right:\n  t &apos;a &apos;b Bigarray.fortran_layout =&gt; int =&gt; Bigarray.Array1.t &apos;a &apos;b Bigarray.fortran_layout;\n</pre><div class="info ">\nExtract a column (one-dimensional slice) of the given\n     two-dimensional big array.  The integer parameter is the\n     index of the column to extract.  See <a href="Bigarray.Genarray.html#VALslice_right"><code class="code">Bigarray.Genarray.slice_right</code></a>\n     for more details.  <code class="code">Array2.slice_right</code> applies only to arrays\n     with Fortran layout.<br>\n</div>\n\n<pre><span class="keyword">let</span> blit: t &apos;a &apos;b &apos;c =&gt; t &apos;a &apos;b &apos;c =&gt; unit;\n</pre><div class="info ">\nCopy the first big array to the second big array.\n     See <a href="Bigarray.Genarray.html#VALblit"><code class="code">Bigarray.Genarray.blit</code></a> for more details.<br>\n</div>\n\n<pre><span class="keyword">let</span> fill: t &apos;a &apos;b &apos;c =&gt; &apos;a =&gt; unit;\n</pre><div class="info ">\nFill the given big array with the given value.\n     See <a href="Bigarray.Genarray.html#VALfill"><code class="code">Bigarray.Genarray.fill</code></a> for more details.<br>\n</div>\n\n<pre><span class="keyword">let</span> of_array: Bigarray.kind &apos;a &apos;b =&gt; Bigarray.layout &apos;c =&gt; array (array &apos;a) =&gt; t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\nBuild a two-dimensional big array initialized from the\n     given array of arrays.<br>\n</div>\n\n<pre><span class="keyword">let</span> map_file:\n  Unix.file_descr =&gt;\n  pos::int64? =&gt;\n  Bigarray.kind &apos;a &apos;b =&gt;\n  Bigarray.layout &apos;c =&gt;\n  bool =&gt;\n  int =&gt;\n  int =&gt;\n  t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\nMemory mapping of a file as a two-dimensional big array.\n     See <a href="Bigarray.Genarray.html#VALmap_file"><code class="code">Bigarray.Genarray.map_file</code></a> for more details.<br>\n</div>\n\n<pre><span class="keyword">let</span> unsafe_get: t &apos;a &apos;b &apos;c =&gt; int =&gt; int =&gt; &apos;a;\n</pre><div class="info ">\nLike <a href="Bigarray.Array2.html#VALget"><code class="code">Bigarray.Array2.get</code></a>, but bounds checking is not always\n      performed.<br>\n</div>\n\n<pre><span class="keyword">let</span> unsafe_set: t &apos;a &apos;b &apos;c =&gt; int =&gt; int =&gt; &apos;a =&gt; unit;\n</pre><div class="info ">\nLike <a href="Bigarray.Array2.html#VALset"><code class="code">Bigarray.Array2.set</code></a>, but bounds checking is not always\n      performed.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Bigarray.Array2.html"}}}});
//# sourceMappingURL=path---api-bigarray-array-2-html-6d238e3feac09da16ae5.js.map