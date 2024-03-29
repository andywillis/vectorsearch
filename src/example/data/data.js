export default {
  entries: [
    {
      id: 15,
      title: 'Ramsgate Sands',
      date: '201218',
      tags: [
        {
          id: 0,
          txt: 'ramsgatesands'
        },
        {
          id: 1,
          txt: 'sunset'
        }
      ],
      link: 'ramsgate-sands-15',
      body: [
        {
          id: 0,
          type: 'para',
          html: 'This is the view from the other side of Sandwich Bay where it hugs the Cliffsend coast to the south of Ramsgate Harbour. This looks back toward the Bay, and is the outer reach of the low tide. Here the North Sea drains away to leave vast stretches of sand for the thousands of sea birds that make their home here.'
        },
        {
          id: 2,
          type: 'image',
          src: 'https://farm5.staticflickr.com/4911/31469292557_c51423babb.jpg',
          alt: 'Ramsgate Sands 800x449'
        }
      ],
      cdata: '<p>This is the view from the other side of Sandwich Bay where it hugs the Cliffsend coast to the south of Ramsgate Harbour. This looks back toward the Bay, and is the outer reach of the low tide. Here the North Sea drains away to leave vast stretches of sand for the thousands of sea birds that make their home here.</p>\n<p><img src=\'https://farm5.staticflickr.com/4911/31469292557_c51423babb.jpg\' alt=\'Ramsgate Sands 800x449\'></p>'
    },
    {
      id: 14,
      title: 'Sandwich Bay, Kent',
      date: '311018',
      tags: [
        {
          id: 0,
          txt: 'sandwichbay'
        },
        {
          id: 1,
          txt: 'beach'
        },
        {
          id: 2,
          txt: 'autumn'
        },
        {
          id: 3,
          txt: 'lowtide'
        }
      ],
      link: 'sandwich-bay-kent-14',
      body: [
        {
          id: 0,
          type: 'para',
          html: 'Took a walk with my Dad along the coast at Sandwich Bay. The tide was rolling out as we arrived, and slowly merged with the horizon as we walked along towards Shellness Point where the seals basked in the low Autumn sun.'
        },
        {
          id: 2,
          type: 'image',
          src: 'https://farm2.staticflickr.com/1953/30710154627_8a80c81bfe.jpg',
          alt: 'Sandwich Bay 800x449'
        },
        {
          id: 3,
          type: 'image',
          src: 'https://farm2.staticflickr.com/1975/45651025001_56a69daaf2.jpg',
          alt: 'Sandwich Bay 800x449'
        }
      ],
      cdata: '<p>Took a walk with my Dad along the coast at Sandwich Bay. The tide was rolling out as we arrived, and slowly merged with the horizon as we walked along towards Shellness Point where the seals basked in the low Autumn sun.</p>\n<p><img src=\'https://farm2.staticflickr.com/1953/30710154627_8a80c81bfe.jpg\' alt=\'Sandwich Bay 800x449\'>\n<img src=\'https://farm2.staticflickr.com/1975/45651025001_56a69daaf2.jpg\' alt=\'Sandwich Bay 800x449\'></p>'
    },
    {
      id: 13,
      title: 'Dungeness',
      date: '300917',
      tags: [
        {
          id: 0,
          txt: 'dungeness'
        },
        {
          id: 1,
          txt: 'beach'
        },
        {
          id: 2,
          txt: 'windswept'
        }
      ],
      link: 'dungeness-13',
      body: [
        {
          id: 1,
          type: 'image',
          src: 'https://farm5.staticflickr.com/4497/36861332483_823053a587.jpg',
          alt: 'Dungeness beach 800x449'
        },
        {
          id: 2,
          type: 'image',
          src: 'https://farm5.staticflickr.com/4479/37530502011_35f391476d.jpg',
          alt: 'Ship high on the beach 480x800'
        }
      ],
      cdata: '<p><img src=\'https://farm5.staticflickr.com/4497/36861332483_823053a587.jpg\' alt=\'Dungeness beach 800x449\'>\n<img src=\'https://farm5.staticflickr.com/4479/37530502011_35f391476d.jpg\' alt=\'Ship high on the beach 480x800\'></p>'
    },
    {
      id: 12,
      title: 'Flickr images for responsive sites',
      date: '210817',
      tags: [
        {
          id: 0,
          txt: 'images'
        },
        {
          id: 1,
          txt: 'responsive'
        },
        {
          id: 2,
          txt: 'flickr'
        }
      ],
      link: 'flickr-images-for-responsive-sites-12',
      body: [
        {
          id: 0,
          type: 'para',
          html: 'Today I implemented basic responsive images for this site in order to improve the performance, and it took less than an hour thanks, mainly, to Flickr.'
        },
        {
          id: 1,
          type: 'para',
          html: 'When you upload a new image to Flickr the service will automatically create and host new sizes of that image. Those copies can be requested through a simple http request (no need to use the API if you don\'t need to) according to a simple formula: <code>filename[_sizeId].jpg</code>.'
        },
        {
          id: 2,
          type: 'para',
          html: 'For reference here\'s a list of the sizes along with their sizeIds based on an original image size of 2592x1456. Those marked with an asterisk are those sizes used for the devices that might visit this site.'
        },
        {
          id: 3,
          type: 'table',
          html: '\n<thead>\n<tr>\n<th style=\'text-align:center\'>Type</th>\n<th style=\'text-align:center\'>Dimensions</th>\n<th style=\'text-align:center\'>ID</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\'text-align:center\'>Square</td>\n<td style=\'text-align:center\'>75x75</td>\n<td style=\'text-align:center\'>s</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Thumbnail</td>\n<td style=\'text-align:center\'>100x56</td>\n<td style=\'text-align:center\'>t</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Square</td>\n<td style=\'text-align:center\'>150x150</td>\n<td style=\'text-align:center\'>q</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Small</td>\n<td style=\'text-align:center\'>240x135</td>\n<td style=\'text-align:center\'>m</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Small*</td>\n<td style=\'text-align:center\'>320x180</td>\n<td style=\'text-align:center\'>n</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Medium*</td>\n<td style=\'text-align:center\'>500x281</td>\n<td style=\'text-align:center\'>n/a</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Medium</td>\n<td style=\'text-align:center\'>640x359</td>\n<td style=\'text-align:center\'>z</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Medium*</td>\n<td style=\'text-align:center\'>800x449</td>\n<td style=\'text-align:center\'>c</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Large</td>\n<td style=\'text-align:center\'>1024x575</td>\n<td style=\'text-align:center\'>b</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Large</td>\n<td style=\'text-align:center\'>1600x899</td>\n<td style=\'text-align:center\'>h</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Large</td>\n<td style=\'text-align:center\'>2048x1150</td>\n<td style=\'text-align:center\'>k</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Original</td>\n<td style=\'text-align:center\'>2592x1456</td>\n<td style=\'text-align:center\'>o</td>\n</tr>\n</tbody>\n'
        }
      ],
      cdata: '<p>Today I implemented basic responsive images for this site in order to improve the performance, and it took less than an hour thanks - mainly - to Flickr.</p>\n<p>When you upload a new image to Flickr the service will automatically create and host new sizes of that image. Those copies can be requested through a simple http request (no need to use the API if you don\'t need to) according to a simple formula: <code>filename[_sizeId].jpg</code>.</p>\n<p>For reference here\'s a list of the sizes along with their sizeIds based on an original image size of 2592x1456. Those marked with an asterisk are those sizes used for the devices that might visit this site.</p>\n<table>\n<thead>\n<tr>\n<th style=\'text-align:center\'>Type</th>\n<th style=\'text-align:center\'>Dimensions</th>\n<th style=\'text-align:center\'>ID</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\'text-align:center\'>Square</td>\n<td style=\'text-align:center\'>75x75</td>\n<td style=\'text-align:center\'>s</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Thumbnail</td>\n<td style=\'text-align:center\'>100x56</td>\n<td style=\'text-align:center\'>t</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Square</td>\n<td style=\'text-align:center\'>150x150</td>\n<td style=\'text-align:center\'>q</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Small</td>\n<td style=\'text-align:center\'>240x135</td>\n<td style=\'text-align:center\'>m</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Small*</td>\n<td style=\'text-align:center\'>320x180</td>\n<td style=\'text-align:center\'>n</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Medium*</td>\n<td style=\'text-align:center\'>500x281</td>\n<td style=\'text-align:center\'>n/a</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Medium</td>\n<td style=\'text-align:center\'>640x359</td>\n<td style=\'text-align:center\'>z</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Medium*</td>\n<td style=\'text-align:center\'>800x449</td>\n<td style=\'text-align:center\'>c</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Large</td>\n<td style=\'text-align:center\'>1024x575</td>\n<td style=\'text-align:center\'>b</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Large</td>\n<td style=\'text-align:center\'>1600x899</td>\n<td style=\'text-align:center\'>h</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Large</td>\n<td style=\'text-align:center\'>2048x1150</td>\n<td style=\'text-align:center\'>k</td>\n</tr>\n<tr>\n<td style=\'text-align:center\'>Original</td>\n<td style=\'text-align:center\'>2592x1456</td>\n<td style=\'text-align:center\'>o</td>\n</tr>\n</tbody>\n</table>'
    },
    {
      id: 11,
      title: 'Akule',
      date: '150817',
      tags: [
        {
          id: 0,
          txt: 'ocean'
        },
        {
          id: 1,
          txt: 'photography'
        },
        {
          id: 2,
          txt: 'underwater'
        },
        {
          id: 3,
          txt: 'hawaii'
        }
      ],
      link: 'akule-11',
      body: [
        {
          id: 1,
          type: 'blockquote',
          html: '\'When I descend beneath the surface I am in a world with different rules, different truths. Things look different, light acts differently, gravity pulls differently. One can fly, or at least float over the landscape, or seascape. When I descend into this wonderland, <a href=\'http://lenscratch.com/2017/08/wayne-levin-the-states-project-hawaii/\'>I want to make images, not to explain or clarify that world, but to deepen the mystery.</a>\' - Wayne Levin'
        },
        {
          id: 3,
          type: 'image',
          src: 'https://farm5.staticflickr.com/4372/35782338684_6e03d00bc6.jpg',
          alt: 'Pretty school of fish 535x800'
        }
      ],
      cdata: '<blockquote>\n<p>\'When I descend beneath the surface I am in a world with different rules, different truths. Things look different, light acts differently, gravity pulls differently. One can fly, or at least float over the landscape, or seascape. When I descend into this wonderland, <a href=\'http://lenscratch.com/2017/08/wayne-levin-the-states-project-hawaii/\'>I want to make images, not to explain or clarify that world, but to deepen the mystery.</a>\' - Wayne Levin</p>\n</blockquote>\n<p><img src=\'https://farm5.staticflickr.com/4372/35782338684_6e03d00bc6.jpg\' alt=\'Pretty school of fish 535x800\'></p>'
    },
    {
      id: 10,
      title: 'Wimbledon Common',
      date: '310717',
      tags: [
        {
          id: 0,
          txt: 'wimbledoncommon'
        },
        {
          id: 1,
          txt: 'pond'
        },
        {
          id: 2,
          txt: 'samshepard'
        }
      ],
      link: 'wimbledon-common-10',
      body: [
        {
          id: 0,
          type: 'para',
          html: 'This is the pond I was lazing by when I heard the sad news that Sam Shepard had died.'
        },
        {
          id: 2,
          type: 'image',
          src: 'https://farm5.staticflickr.com/4291/36160259971_b9bdc0331a.jpg',
          alt: 'Pond on the East side of Wimbledon Common 800x449'
        }
      ],
      cdata: '<p>This is the pond I was lazing by when I heard the sad news that Sam Shepard had died.</p>\n<p><img src=\'https://farm5.staticflickr.com/4291/36160259971_b9bdc0331a.jpg\' alt=\'Pond on the East side of Wimbledon Common 800x449\'></p>'
    },
    {
      id: 9,
      title: 'This site',
      date: '240617',
      tags: [
        {
          id: 0,
          txt: 'express'
        },
        {
          id: 1,
          txt: 'react'
        },
        {
          id: 2,
          txt: 'reactrouter'
        },
        {
          id: 3,
          txt: 'markdown'
        },
        {
          id: 4,
          txt: 'journal'
        }
      ],
      link: 'this-site-9',
      body: [
        {
          id: 0,
          type: 'para',
          html: 'This site is <a href=\'https://github.com/andywillis/uws\'>an on-going React/Redux project</a> to build and maintain an online static-site generated journal that looks good on both mobile and desktop. Initially this was going to be a one-shot experiment, but as I lean into different tech each month this has become a useful battle-tested area for me to test each tech out.'
        },
        {
          id: 1,
          type: 'para',
          html: 'In the first release, for example, I decided to not implement Redux so I could concentrate on the React component workflow instead. I added Redux in the second release. And, while I\'m a fan of CSS modules, it makes sense to start testing CSS-in-JS here too to see what all the fuss is about.'
        },
        {
          id: 2,
          type: 'h2',
          txt: 'Process breakdown'
        },
        {
          id: 3,
          type: 'para',
          html: 'All the text on this site was generated from a markdown file (currently only 4k in size) hosted on my Google Drive account.'
        },
        {
          id: 4,
          type: 'para',
          html: 'I use Express to grab that file every 30 minutes, wrangle the data into an array of entries, and store it. There is a single API route <code>/entries</code> that React uses to get the data.'
        },
        {
          id: 5,
          type: 'para',
          html: 'Once the site is loaded I use <code>redux-thunk</code> to grab the data from the server and store it in a Redux state for React to use. React-router 4 provides a stable routing interface.'
        },
        {
          id: 6,
          type: 'para',
          html: 'This system means I can update the markdown file whenever I want from either my desktop or phone without the hassle of accessing a site admin panel to add a post knowing that within 30 minutes those words will be available on the site.'
        }
      ],
      cdata: '<p>This site is <a href=\'https://github.com/andywillis/uws\'>an on-going React/Redux project</a> to build and maintain an online static-site generated journal that looks good on both mobile and desktop. Initially this was going to be a one-shot experiment, but as I lean into different tech each month this has become a useful battle-tested area for me to test each tech out.</p>\n<p>In the first release, for example, I decided to not implement Redux so I could concentrate on the React component workflow instead. I added Redux in the second release. And, while I\'m a fan of CSS modules, it makes sense to start testing CSS-in-JS here too to see what all the fuss is about.</p>\n<h2>Process breakdown</h2>\n<p>All the text on this site was generated from a markdown file (currently only 4k in size) hosted on my Google Drive account.</p>\n<p>I use Express to grab that file every 30 minutes, wrangle the data into an array of entries, and store it. There is a single API route <code>/entries</code> that React uses to get the data.</p>\n<p>Once the site is loaded I use <code>redux-thunk</code> to grab the data from the server and store it in a Redux state for React to use. React-router 4 provides a stable routing interface.</p>\n<p>This system means I can update the markdown file whenever I want from either my desktop or phone without the hassle of accessing a site admin panel to add a post knowing that within 30 minutes those words will be available on the site.</p>'
    },
    {
      id: 8,
      title: 'A Tuesday Wander',
      date: '160517',
      tags: [
        {
          id: 0,
          txt: 'kensingtonchurch'
        },
        {
          id: 1,
          txt: 'greenpark'
        },
        {
          id: 2,
          txt: 'london'
        },
        {
          id: 3,
          txt: 'hydepark'
        }
      ],
      link: 'a-tuesday-wander-8',
      body: [
        {
          id: 0,
          type: 'para',
          html: 'A walk from Embankment, up The Mall to Buckingham Palace, along <a href=\'https://c1.staticflickr.com/5/4194/33905597993_40dcd32263.jpg\'>Green Park</a> up to Hyde Park, through the park along the lake with the talkative geese, across to Kensington Palace <a href=\'http://www.metafilter.com\'>Gardens</a>, and out on to the road via <a href=\'https://c1.staticflickr.com/5/4185/34330714870_ae972fe467.jpg\'>the church</a>, finally heading down to Earl\'s Court.'
        },
        {
          id: 2,
          type: 'image',
          src: 'https://c1.staticflickr.com/5/4175/34335985270_811e152740.jpg',
          alt: 'Map of the walk from Embankment to Earl\'s Court 800x384'
        }
      ],
      cdata: '<p>A walk from Embankment, up The Mall to Buckingham Palace, along <a href=\'https://c1.staticflickr.com/5/4194/33905597993_40dcd32263.jpg\'>Green Park</a> up to Hyde Park, through the park along the lake with the talkative geese, across to Kensington Palace <a href=\'http://www.metafilter.com\'>Gardens</a>, and out on to the road via <a href=\'https://c1.staticflickr.com/5/4185/34330714870_ae972fe467.jpg\'>the church</a>, finally heading down to Earl\'s Court.</p>\n<p><img src=\'https://c1.staticflickr.com/5/4175/34335985270_811e152740.jpg\' alt=\'Map of the walk from Embankment to Earl\'s Court 800x384\'></p>'
    },
    {
      id: 7,
      title: 'Broadstairs',
      date: '281216',
      tags: [
        {
          id: 0,
          txt: 'broadstairs'
        },
        {
          id: 1,
          txt: 'northsea'
        },
        {
          id: 2,
          txt: 'beach'
        },
        {
          id: 3,
          txt: 'ocean'
        }
      ],
      link: 'broadstairs-7',
      body: [
        {
          id: 0,
          type: 'para',
          html: 'It comes as a surprise to many people, even to those who have lived in the area, that the water that plays alongs the coast around Broadstairs, Ramsgate, Sandwich, and even Deal, is not the English Channel, but the North Sea.'
        },
        {
          id: 2,
          type: 'image',
          src: 'https://c1.staticflickr.com/1/602/31912173126_bbdfc7aee1.jpg',
          alt: 'Photo of the North Sea from the coast near Broadstairs 800x449'
        },
        {
          id: 3,
          type: 'para',
          html: 'If you were to imagine a line that crossed the sea in an ENE direction from Leathercoate Point, where the war memorial commemorating the Dover Patrol stands North of St. Margaret\'s Bay, to Walde Lighthouse just North of Calais, that line demarks where the Sea becomes the Channel.'
        },
        {
          id: 5,
          type: 'image',
          src: 'https://c1.staticflickr.com/1/568/31912171456_8cbdda4cd8.jpg',
          alt: 'Photo of the North Sea from the coast near Broadstairs 800x450'
        }
      ],
      cdata: '<p>It comes as a surprise to many people, even to those who have lived in the area, that the water that plays alongs the coast around Broadstairs, Ramsgate, Sandwich, and even Deal, is not the English Channel, but the North Sea.</p>\n<p><img src=\'https://c1.staticflickr.com/1/602/31912173126_bbdfc7aee1.jpg\' alt=\'Photo of the North Sea from the coast near Broadstairs 800x449\'></p>\n<p>If you were to imagine a line that crossed the sea in an ENE direction from Leathercoate Point, where the war memorial commemorating the Dover Patrol stands North of St. Margaret\'s Bay, to Walde Lighthouse just North of Calais, that line demarks where the Sea becomes the Channel.</p>\n<p><img src=\'https://c1.staticflickr.com/1/568/31912171456_8cbdda4cd8.jpg\' alt=\'Photo of the North Sea from the coast near Broadstairs 800x450\'></p>'
    },
    {
      id: 6,
      title: 'Wimbledon Common',
      date: '200915',
      tags: [
        {
          id: 0,
          txt: 'wimbledon'
        },
        {
          id: 1,
          txt: 'wimbledoncommon'
        }
      ],
      link: 'wimbledon-common-6',
      body: [
        {
          id: 1,
          type: 'image',
          src: 'https://c1.staticflickr.com/1/329/31893590755_8a00661ac1.jpg',
          alt: 'The sun\'s rays shine through the foliage of a tree on the Common 800x449'
        }
      ],
      cdata: '<p><img src=\'https://c1.staticflickr.com/1/329/31893590755_8a00661ac1.jpg\' alt=\'The sun\'s rays shine through the foliage of a tree on the Common 800x449\'></p>'
    },
    {
      id: 5,
      title: 'Montevideo, Uruguay',
      date: '160715',
      tags: [
        {
          id: 0,
          txt: 'uruguay'
        },
        {
          id: 1,
          txt: 'beach'
        },
        {
          id: 2,
          txt: 'ocean'
        }
      ],
      link: 'montevideo-uruguay-5',
      body: [
        {
          id: 1,
          type: 'image',
          src: 'https://c1.staticflickr.com/1/460/19731108126_c55eec191a.jpg',
          alt: 'The beach North of Montevideo, Uruguay 800x449'
        }
      ],
      cdata: '<p><img src=\'https://c1.staticflickr.com/1/460/19731108126_c55eec191a.jpg\' alt=\'The beach North of Montevideo, Uruguay 800x449\'></p>'
    },
    {
      id: 4,
      title: 'Disney\'s The Black Hole',
      date: '030412',
      tags: [
        {
          id: 0,
          txt: 'theblackhole'
        },
        {
          id: 1,
          txt: 'spotmap'
        }
      ],
      link: 'disneys-the-black-hole-4',
      body: [
        {
          id: 0,
          type: 'para',
          html: 'This is one of the many images rendered by my <a href=\'https://github.com/andywillis/spotmaps\'>spotmaps</a> <a href=\'https://github.com/andywillis/spotmap-pipeline\'>application</a>.'
        },
        {
          id: 1,
          type: 'para',
          html: 'From the original site:'
        },
        {
          id: 3,
          type: 'blockquote',
          html: 'Spotmaps, based on Brendan Dawes\' <a href=\'http://brendandawes.com/projects/cinemaredux\'>Cinema Redux</a>, is an on-going project to map the colour narratives of different films.'
        },
        {
          id: 4,
          type: 'blockquote',
          html: 'Films are processed through a Python/OpenCV pipeline: each frame\'s colour is sampled, and  a spot of average colour is produced from the combination of one second\'s frames.'
        },
        {
          id: 5,
          type: 'blockquote',
          html: 'Spots are laid out 60 per line to represent one minute of film time. The length of the image represents the number of minutes in the film.'
        },
        {
          id: 6,
          type: 'blockquote',
          html: 'A 24-colour Adobe swatch file in ASE format and a hex RGB colour file are available to download for each spotmap.'
        },
        {
          id: 8,
          type: 'image',
          src: 'https://farm5.staticflickr.com/4366/35888008014_d2941d2375.jpg',
          alt: 'Black Hole spotmap 532x800'
        },
        {
          id: 9,
          type: 'para',
          html: 'More images can be found <a href=\'https://www.flickr.com/photos/urbanwhaleshark/albums/72157649963155584/with/17126036787/\'>here on Flickr</a>.'
        },
        {
          id: 10,
          type: 'para',
          html: 'There are also a couple of online articles about the spotmaps website on <a href=\'http://www.fastcodesign.com/1671572/infographic-the-colors-from-your-favorite-movies-mapped-to-7200-pixels\'>FastCoDesign</a>, and <a href=\'http://gizmodo.com/5972740/the-color-of-movies-visualized\'>Gizmodo</a>.'
        }
      ],
      cdata: '<p>This is one of the many images rendered by my <a href=\'https://github.com/andywillis/spotmaps\'>spotmaps</a> <a href=\'https://github.com/andywillis/spotmap-pipeline\'>application</a>.</p>\n<p>From the original site:</p>\n<blockquote>\n<p>Spotmaps, based on Brendan Dawes\' <a href=\'http://brendandawes.com/projects/cinemaredux\'>Cinema Redux</a>, is an on-going project to map the colour narratives of different films.</p>\n<p>Films are processed through a Python/OpenCV pipeline: each frame\'s colour is sampled, and  a spot of average colour is produced from the combination of one second\'s frames.</p>\n<p>Spots are laid out 60 per line to represent one minute of film time. The length of the image represents the number of minutes in the film.</p>\n<p>A 24-colour Adobe swatch file in ASE format and a hex RGB colour file are available to download for each spotmap.</p>\n</blockquote>\n<p><img src=\'https://farm5.staticflickr.com/4366/35888008014_d2941d2375.jpg\' alt=\'Black Hole spotmap 532x800\'></p>\n<p>More images can be found <a href=\'https://www.flickr.com/photos/urbanwhaleshark/albums/72157649963155584/with/17126036787/\'>here on Flickr</a>.</p>\n<p>There are also a couple of online articles about the spotmaps website on <a href=\'http://www.fastcodesign.com/1671572/infographic-the-colors-from-your-favorite-movies-mapped-to-7200-pixels\'>FastCoDesign</a>, and <a href=\'http://gizmodo.com/5972740/the-color-of-movies-visualized\'>Gizmodo</a>.</p>'
    },
    {
      id: 3,
      title: 'Nan',
      date: '010106',
      tags: [
        {
          id: 0,
          txt: 'nan'
        },
        {
          id: 1,
          txt: 'war'
        },
        {
          id: 2,
          txt: 'hospital'
        }
      ],
      link: 'nan-3',
      body: [
        {
          id: 0,
          type: 'para',
          html: 'Nan is on the right.'
        },
        {
          id: 2,
          type: 'image',
          src: 'https://farm1.staticflickr.com/35/71621166_34f71281e7.jpg',
          alt: 'Nan in an operating theatre (black and white) 800x474'
        }
      ],
      cdata: '<p>Nan is on the right.</p>\n<p><img src=\'https://farm1.staticflickr.com/35/71621166_34f71281e7.jpg\' alt=\'Nan in an operating theatre (black and white) 800x474\'></p>'
    },
    {
      id: 2,
      title: 'My Great Grandad, George W. Smith.',
      date: '010106',
      tags: [
        {
          id: 0,
          txt: 'greatgranddad'
        },
        {
          id: 1,
          txt: 'miner'
        },
        {
          id: 2,
          txt: 'kent'
        },
        {
          id: 3,
          txt: 'dover'
        }
      ],
      link: 'my-great-grandad-george-w-smith-2',
      body: [
        {
          id: 0,
          type: 'para',
          html: 'Organised the first Kent miner\'s strike.'
        },
        {
          id: 2,
          type: 'image',
          src: 'https://farm1.staticflickr.com/20/72584528_bb9fe13cde.jpg',
          alt: 'My great-grandfather, George 500x431'
        }
      ],
      cdata: '<p>Organised the first Kent miner\'s strike.</p>\n<p><img src=\'https://farm1.staticflickr.com/20/72584528_bb9fe13cde.jpg\' alt=\'My great-grandfather, George 500x431\'></p>'
    },
    {
      id: 1,
      title: 'Dirty Cow',
      date: '010100',
      tags: [
        {
          id: 0,
          txt: 'cow'
        },
        {
          id: 1,
          txt: 'dirtycow'
        },
        {
          id: 2,
          txt: '2000'
        },
        {
          id: 3,
          txt: 'newyear'
        }
      ],
      link: 'dirty-cow-1',
      body: [
        {
          id: 1,
          type: 'image',
          src: 'https://farm1.staticflickr.com/40/90764612_de3f3bef39.jpg',
          alt: 'Massive papier-mache cow on the roof of Fortress Studios 569x800'
        }
      ],
      cdata: '<p><img src=\'https://farm1.staticflickr.com/40/90764612_de3f3bef39.jpg\' alt=\'Massive papier-mache cow on the roof of Fortress Studios 569x800\'></p>'
    }
  ],
  links: [
    'ramsgate-sands-15',
    'sandwich-bay-kent-14',
    'dungeness-13',
    'flickr-images-for-responsive-sites-12',
    'akule-11',
    'wimbledon-common-10',
    'this-site-9',
    'a-tuesday-wander-8',
    'broadstairs-7',
    'wimbledon-common-6',
    'montevideo-uruguay-5',
    'disneys-the-black-hole-4',
    'nan-3',
    'my-great-grandad-george-w-smith-2',
    'dirty-cow-1'
  ],
  tags: {
    2000: 1,
    ramsgatesands: 1,
    sunset: 1,
    sandwichbay: 1,
    beach: 4,
    autumn: 1,
    lowtide: 1,
    dungeness: 1,
    windswept: 1,
    images: 1,
    responsive: 1,
    flickr: 1,
    ocean: 3,
    photography: 1,
    underwater: 1,
    hawaii: 1,
    wimbledoncommon: 2,
    pond: 1,
    samshepard: 1,
    express: 1,
    react: 1,
    reactrouter: 1,
    markdown: 1,
    journal: 1,
    kensingtonchurch: 1,
    greenpark: 1,
    london: 1,
    hydepark: 1,
    broadstairs: 1,
    northsea: 1,
    wimbledon: 1,
    uruguay: 1,
    theblackhole: 1,
    spotmap: 1,
    nan: 1,
    war: 1,
    hospital: 1,
    greatgranddad: 1,
    miner: 1,
    kent: 1,
    dover: 1,
    cow: 1,
    dirtycow: 1,
    newyear: 1
  }
};
