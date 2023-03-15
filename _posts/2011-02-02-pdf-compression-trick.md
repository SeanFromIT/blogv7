---
author: SeanFromIT
comments: "true"
date: 2011-02-02 01:50:00+00:00
layout: post
link: https://feeney.mba/2011/02/02/pdf-compression-trick/
slug: pdf-compression-trick
title: PDF Compression Trick
wordpress_id: 116
categories:
- Adobe
- compression
- pdf
- Photoshop
---

Adobe doesn't offer too many options in Photoshop to reduce the size of a PDF. If you use JPEG compression and move the slider to 0 quality, you'll wind up with an ugly PDF that only saved you 1MB. I was able to cut the size of my test PDF in half (~3MB) by first printing to XPS and then using [XPS2PDF](http://www.xps2pdf.org/). If you're on Linux, you might be able to do something similar by [going to PS and then back to PDF](http://pandemoniumillusion.wordpress.com/2008/05/07/compress-a-pdf-with-pdftk/), but it probably won't work well if there are fonts involved.  
  
Another way to compress your Photoshop PDF is to use a PDF print driver like PDF995. The same PDF which got cut to 3.5MB using the above method was cut down to 1.5MB using PDF995.  
  
You may be able to skip the XPS step by flattening to one layer in Photoshop. PDF print drivers seem to be layer aware when printing from Photoshop, so by flatting you can gain significant size savings and also prevent some display and print issues I've seen with thin lines when saving as PDF.  
  
Update 2/3/12: Looks like XPS2PDF is down. I found a [trialware](http://www.clarest.com/site/page4.aspx) which can do the same thing (might fail on images), but you have to do it one page at a time and then recombine the exported PDFs into one file using [PDFBinder](http://howto.cnet.com/8301-11310_39-57344712-285/how-to-combine-multiple-pdfs-into-one-document/) or something similar. I've also had compression success using [Neevia's free online service](http://createpdf.neevia.com/pdfcompress/).
