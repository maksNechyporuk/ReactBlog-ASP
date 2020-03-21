﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Models
{
    public class BlogViewModel
    {
      
            public int Id { get; set; }
            public string Name { get; set; }
            public string PrewText { get; set; }
            public string FullText { get; set; }
            public string Img { get; set; }
            public string Author { get; set; }
            public DateTime Date { get; set; }

    }
}
