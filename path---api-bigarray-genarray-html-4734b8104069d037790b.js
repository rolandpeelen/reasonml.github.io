webpackJsonp([299],{"./node_modules/json-loader/index.js!./.cache/json/api-bigarray-genarray-html.json":function(e,a){e.exports={data:{file:{relativePath:"api/Bigarray.Genarray.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar">&#xA0;<a class="up" href="Bigarray.html" title="Bigarray">Up</a>\n&#xA0;<a class="post" href="Bigarray.Array1.html" title="Bigarray.Array1">Next</a>\n</div>\n<h1>Module <a href="type_Bigarray.Genarray.html">Bigarray.Genarray</a></h1>\n\n<pre><span class="keyword">module</span> Genarray: sig .. end</pre><hr width="100%">\n\n<pre><span class="keyword">type</span> t &apos;a &apos;b &apos;c;\n</pre>\n<div class="info ">\nThe type <code class="code">Genarray.t</code> is the type of big arrays with variable\n     numbers of dimensions.  Any number of dimensions between 1 and 16\n     is supported.\n<p>\n\n     The three type parameters to <code class="code">Genarray.t</code> identify the array element\n     kind and layout, as follows:</p><ul>\n<li>the first parameter, <code class="code">&apos;a</code>, is the OCaml type for accessing array\n       elements (<code class="code">float</code>, <code class="code">int</code>, <code class="code">int32</code>, <code class="code">int64</code>, <code class="code">nativeint</code>);</li>\n<li>the second parameter, <code class="code">&apos;b</code>, is the actual kind of array elements\n       (<code class="code">float32_elt</code>, <code class="code">float64_elt</code>, <code class="code">int8_signed_elt</code>, <code class="code">int8_unsigned_elt</code>,\n       etc);</li>\n<li>the third parameter, <code class="code">&apos;c</code>, identifies the array layout\n       (<code class="code">c_layout</code> or <code class="code">fortran_layout</code>).</li>\n</ul>\n\n     For instance, <code class="code">(float, float32_elt, fortran_layout) Genarray.t</code>\n     is the type of generic big arrays containing 32-bit floats\n     in Fortran layout; reads and writes in this array use the\n     OCaml type <code class="code">float</code>.<br>\n</div>\n\n\n<pre><span class="keyword">let</span> create: Bigarray.kind &apos;a &apos;b =&gt; Bigarray.layout &apos;c =&gt; array int =&gt; t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\n<code class="code">Genarray.create kind layout dimensions</code> returns a new big array\n     whose element kind is determined by the parameter <code class="code">kind</code> (one of\n     <code class="code">float32</code>, <code class="code">float64</code>, <code class="code">int8_signed</code>, etc) and whose layout is\n     determined by the parameter <code class="code">layout</code> (one of <code class="code">c_layout</code> or\n     <code class="code">fortran_layout</code>).  The <code class="code">dimensions</code> parameter is an array of\n     integers that indicate the size of the big array in each dimension.\n     The length of <code class="code">dimensions</code> determines the number of dimensions\n     of the bigarray.\n<p>\n\n     For instance, <code class="code">Genarray.create int32 c_layout [|4;6;8|]</code>\n     returns a fresh big array of 32-bit integers, in C layout,\n     having three dimensions, the three dimensions being 4, 6 and 8\n     respectively.\n</p><p>\n\n     Big arrays returned by <code class="code">Genarray.create</code> are not initialized:\n     the initial values of array elements is unspecified.\n</p><p>\n\n     <code class="code">Genarray.create</code> raises <code class="code">Invalid_argument</code> if the number of dimensions\n     is not in the range 1 to 16 inclusive, or if one of the dimensions\n     is negative.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> num_dims: t &apos;a &apos;b &apos;c =&gt; int;\n</pre><div class="info ">\nReturn the number of dimensions of the given big array.<br>\n</div>\n\n<pre><span class="keyword">let</span> dims: t &apos;a &apos;b &apos;c =&gt; array int;\n</pre><div class="info ">\n<code class="code">Genarray.dims a</code> returns all dimensions of the big array <code class="code">a</code>,\n     as an array of integers of length <code class="code">Genarray.num_dims a</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> nth_dim: t &apos;a &apos;b &apos;c =&gt; int =&gt; int;\n</pre><div class="info ">\n<code class="code">Genarray.nth_dim a n</code> returns the <code class="code">n</code>-th dimension of the\n     big array <code class="code">a</code>.  The first dimension corresponds to <code class="code">n = 0</code>;\n     the second dimension corresponds to <code class="code">n = 1</code>; the last dimension,\n     to <code class="code">n = Genarray.num_dims a - 1</code>.\n     Raise <code class="code">Invalid_argument</code> if <code class="code">n</code> is less than 0 or greater or equal than\n     <code class="code">Genarray.num_dims a</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> kind: t &apos;a &apos;b &apos;c =&gt; Bigarray.kind &apos;a &apos;b;\n</pre><div class="info ">\nReturn the kind of the given big array.<br>\n</div>\n\n<pre><span class="keyword">let</span> layout: t &apos;a &apos;b &apos;c =&gt; Bigarray.layout &apos;c;\n</pre><div class="info ">\nReturn the layout of the given big array.<br>\n</div>\n\n<pre><span class="keyword">let</span> get: t &apos;a &apos;b &apos;c =&gt; array int =&gt; &apos;a;\n</pre><div class="info ">\nRead an element of a generic big array.\n     <code class="code">Genarray.get a [|i1; ...; iN|]</code> returns the element of <code class="code">a</code>\n     whose coordinates are <code class="code">i1</code> in the first dimension, <code class="code">i2</code> in\n     the second dimension, ..., <code class="code">iN</code> in the <code class="code">N</code>-th dimension.\n<p>\n\n     If <code class="code">a</code> has C layout, the coordinates must be greater or equal than 0\n     and strictly less than the corresponding dimensions of <code class="code">a</code>.\n     If <code class="code">a</code> has Fortran layout, the coordinates must be greater or equal\n     than 1 and less or equal than the corresponding dimensions of <code class="code">a</code>.\n     Raise <code class="code">Invalid_argument</code> if the array <code class="code">a</code> does not have exactly <code class="code">N</code>\n     dimensions, or if the coordinates are outside the array bounds.\n</p><p>\n\n     If <code class="code">N &gt; 3</code>, alternate syntax is provided: you can write\n     <code class="code">a.{i1, i2, ..., iN}</code> instead of <code class="code">Genarray.get a [|i1; ...; iN|]</code>.\n     (The syntax <code class="code">a.{...}</code> with one, two or three coordinates is\n     reserved for accessing one-, two- and three-dimensional arrays\n     as described below.)<br>\n</p></div>\n\n<pre><span class="keyword">let</span> set: t &apos;a &apos;b &apos;c =&gt; array int =&gt; &apos;a =&gt; unit;\n</pre><div class="info ">\nAssign an element of a generic big array.\n     <code class="code">Genarray.set a [|i1; ...; iN|] v</code> stores the value <code class="code">v</code> in the\n     element of <code class="code">a</code> whose coordinates are <code class="code">i1</code> in the first dimension,\n     <code class="code">i2</code> in the second dimension, ..., <code class="code">iN</code> in the <code class="code">N</code>-th dimension.\n<p>\n\n     The array <code class="code">a</code> must have exactly <code class="code">N</code> dimensions, and all coordinates\n     must lie inside the array bounds, as described for <code class="code">Genarray.get</code>;\n     otherwise, <code class="code">Invalid_argument</code> is raised.\n</p><p>\n\n     If <code class="code">N &gt; 3</code>, alternate syntax is provided: you can write\n     <code class="code">a.{i1, i2, ..., iN} &lt;- v</code> instead of\n     <code class="code">Genarray.set a [|i1; ...; iN|] v</code>.\n     (The syntax <code class="code">a.{...} &lt;- v</code> with one, two or three coordinates is\n     reserved for updating one-, two- and three-dimensional arrays\n     as described below.)<br>\n</p></div>\n\n<pre><span class="keyword">let</span> sub_left: t &apos;a &apos;b Bigarray.c_layout =&gt; int =&gt; int =&gt; t &apos;a &apos;b Bigarray.c_layout;\n</pre><div class="info ">\nExtract a sub-array of the given big array by restricting the\n     first (left-most) dimension.  <code class="code">Genarray.sub_left a ofs len</code>\n     returns a big array with the same number of dimensions as <code class="code">a</code>,\n     and the same dimensions as <code class="code">a</code>, except the first dimension,\n     which corresponds to the interval <code class="code">[ofs ... ofs + len - 1]</code>\n     of the first dimension of <code class="code">a</code>.  No copying of elements is\n     involved: the sub-array and the original array share the same\n     storage space.  In other terms, the element at coordinates\n     <code class="code">[|i1; ...; iN|]</code> of the sub-array is identical to the\n     element at coordinates <code class="code">[|i1+ofs; ...; iN|]</code> of the original\n     array <code class="code">a</code>.\n<p>\n\n     <code class="code">Genarray.sub_left</code> applies only to big arrays in C layout.\n     Raise <code class="code">Invalid_argument</code> if <code class="code">ofs</code> and <code class="code">len</code> do not designate\n     a valid sub-array of <code class="code">a</code>, that is, if <code class="code">ofs &lt; 0</code>, or <code class="code">len &lt; 0</code>,\n     or <code class="code">ofs + len &gt; Genarray.nth_dim a 0</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> sub_right: t &apos;a &apos;b Bigarray.fortran_layout =&gt; int =&gt; int =&gt; t &apos;a &apos;b Bigarray.fortran_layout;\n</pre><div class="info ">\nExtract a sub-array of the given big array by restricting the\n     last (right-most) dimension.  <code class="code">Genarray.sub_right a ofs len</code>\n     returns a big array with the same number of dimensions as <code class="code">a</code>,\n     and the same dimensions as <code class="code">a</code>, except the last dimension,\n     which corresponds to the interval <code class="code">[ofs ... ofs + len - 1]</code>\n     of the last dimension of <code class="code">a</code>.  No copying of elements is\n     involved: the sub-array and the original array share the same\n     storage space.  In other terms, the element at coordinates\n     <code class="code">[|i1; ...; iN|]</code> of the sub-array is identical to the\n     element at coordinates <code class="code">[|i1; ...; iN+ofs|]</code> of the original\n     array <code class="code">a</code>.\n<p>\n\n     <code class="code">Genarray.sub_right</code> applies only to big arrays in Fortran layout.\n     Raise <code class="code">Invalid_argument</code> if <code class="code">ofs</code> and <code class="code">len</code> do not designate\n     a valid sub-array of <code class="code">a</code>, that is, if <code class="code">ofs &lt; 1</code>, or <code class="code">len &lt; 0</code>,\n     or <code class="code">ofs + len &gt; Genarray.nth_dim a (Genarray.num_dims a - 1)</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> slice_left: t &apos;a &apos;b Bigarray.c_layout =&gt; array int =&gt; t &apos;a &apos;b Bigarray.c_layout;\n</pre><div class="info ">\nExtract a sub-array of lower dimension from the given big array\n     by fixing one or several of the first (left-most) coordinates.\n     <code class="code">Genarray.slice_left a [|i1; ... ; iM|]</code> returns the &apos;slice&apos;\n     of <code class="code">a</code> obtained by setting the first <code class="code">M</code> coordinates to\n     <code class="code">i1</code>, ..., <code class="code">iM</code>.  If <code class="code">a</code> has <code class="code">N</code> dimensions, the slice has\n     dimension <code class="code">N - M</code>, and the element at coordinates\n     <code class="code">[|j1; ...; j(N-M)|]</code> in the slice is identical to the element\n     at coordinates <code class="code">[|i1; ...; iM; j1; ...; j(N-M)|]</code> in the original\n     array <code class="code">a</code>.  No copying of elements is involved: the slice and\n     the original array share the same storage space.\n<p>\n\n     <code class="code">Genarray.slice_left</code> applies only to big arrays in C layout.\n     Raise <code class="code">Invalid_argument</code> if <code class="code">M &gt;= N</code>, or if <code class="code">[|i1; ... ; iM|]</code>\n     is outside the bounds of <code class="code">a</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> slice_right: t &apos;a &apos;b Bigarray.fortran_layout =&gt; array int =&gt; t &apos;a &apos;b Bigarray.fortran_layout;\n</pre><div class="info ">\nExtract a sub-array of lower dimension from the given big array\n     by fixing one or several of the last (right-most) coordinates.\n     <code class="code">Genarray.slice_right a [|i1; ... ; iM|]</code> returns the &apos;slice&apos;\n     of <code class="code">a</code> obtained by setting the last <code class="code">M</code> coordinates to\n     <code class="code">i1</code>, ..., <code class="code">iM</code>.  If <code class="code">a</code> has <code class="code">N</code> dimensions, the slice has\n     dimension <code class="code">N - M</code>, and the element at coordinates\n     <code class="code">[|j1; ...; j(N-M)|]</code> in the slice is identical to the element\n     at coordinates <code class="code">[|j1; ...; j(N-M); i1; ...; iM|]</code> in the original\n     array <code class="code">a</code>.  No copying of elements is involved: the slice and\n     the original array share the same storage space.\n<p>\n\n     <code class="code">Genarray.slice_right</code> applies only to big arrays in Fortran layout.\n     Raise <code class="code">Invalid_argument</code> if <code class="code">M &gt;= N</code>, or if <code class="code">[|i1; ... ; iM|]</code>\n     is outside the bounds of <code class="code">a</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> blit: t &apos;a &apos;b &apos;c =&gt; t &apos;a &apos;b &apos;c =&gt; unit;\n</pre><div class="info ">\nCopy all elements of a big array in another big array.\n     <code class="code">Genarray.blit src dst</code> copies all elements of <code class="code">src</code> into\n     <code class="code">dst</code>.  Both arrays <code class="code">src</code> and <code class="code">dst</code> must have the same number of\n     dimensions and equal dimensions.  Copying a sub-array of <code class="code">src</code>\n     to a sub-array of <code class="code">dst</code> can be achieved by applying <code class="code">Genarray.blit</code>\n     to sub-array or slices of <code class="code">src</code> and <code class="code">dst</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> fill: t &apos;a &apos;b &apos;c =&gt; &apos;a =&gt; unit;\n</pre><div class="info ">\nSet all elements of a big array to a given value.\n     <code class="code">Genarray.fill a v</code> stores the value <code class="code">v</code> in all elements of\n     the big array <code class="code">a</code>.  Setting only some elements of <code class="code">a</code> to <code class="code">v</code>\n     can be achieved by applying <code class="code">Genarray.fill</code> to a sub-array\n     or a slice of <code class="code">a</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> map_file:\n  Unix.file_descr =&gt;\n  pos::int64? =&gt;\n  Bigarray.kind &apos;a &apos;b =&gt;\n  Bigarray.layout &apos;c =&gt;\n  bool =&gt;\n  array int =&gt;\n  t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\nMemory mapping of a file as a big array.\n     <code class="code">Genarray.map_file fd kind layout shared dims</code>\n     returns a big array of kind <code class="code">kind</code>, layout <code class="code">layout</code>,\n     and dimensions as specified in <code class="code">dims</code>.  The data contained in\n     this big array are the contents of the file referred to by\n     the file descriptor <code class="code">fd</code> (as opened previously with\n     <code class="code">Unix.openfile</code>, for example).  The optional <code class="code">pos</code> parameter\n     is the byte offset in the file of the data being mapped;\n     it defaults to 0 (map from the beginning of the file).\n<p>\n\n     If <code class="code">shared</code> is <code class="code">true</code>, all modifications performed on the array\n     are reflected in the file.  This requires that <code class="code">fd</code> be opened\n     with write permissions.  If <code class="code">shared</code> is <code class="code">false</code>, modifications\n     performed on the array are done in memory only, using\n     copy-on-write of the modified pages; the underlying file is not\n     affected.\n</p><p>\n\n     <code class="code">Genarray.map_file</code> is much more efficient than reading\n     the whole file in a big array, modifying that big array,\n     and writing it afterwards.\n</p><p>\n\n     To adjust automatically the dimensions of the big array to\n     the actual size of the file, the major dimension (that is,\n     the first dimension for an array with C layout, and the last\n     dimension for an array with Fortran layout) can be given as\n     <code class="code">-1</code>.  <code class="code">Genarray.map_file</code> then determines the major dimension\n     from the size of the file.  The file must contain an integral\n     number of sub-arrays as determined by the non-major dimensions,\n     otherwise <code class="code">Failure</code> is raised.\n</p><p>\n\n     If all dimensions of the big array are given, the file size is\n     matched against the size of the big array.  If the file is larger\n     than the big array, only the initial portion of the file is\n     mapped to the big array.  If the file is smaller than the big\n     array, the file is automatically grown to the size of the big array.\n     This requires write permissions on <code class="code">fd</code>.\n</p><p>\n\n     Array accesses are bounds-checked, but the bounds are determined by\n     the initial call to <code class="code">map_file</code>. Therefore, you should make sure no\n     other process modifies the mapped file while you&apos;re accessing it,\n     or a SIGBUS signal may be raised. This happens, for instance, if the\n     file is shrunk.\n</p><p>\n\n     This function raises <code class="code">Sys_error</code> in the case of any errors from the\n     underlying system calls.  <code class="code">Invalid_argument</code> or <code class="code">Failure</code> may be\n     raised in cases where argument validation fails.<br>\n</p></div>\n</div>'}}},pathContext:{relativePath:"api/Bigarray.Genarray.html"}}}});
//# sourceMappingURL=path---api-bigarray-genarray-html-4734b8104069d037790b.js.map