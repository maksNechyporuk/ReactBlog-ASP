using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Blog.Entities;
using Blog.Interfaces;
using Blog.Models;
using Blog.Repository;
using Blog.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Blog.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class BlogController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IHostingEnvironment _env;
        private readonly IBlogRepository _postRepository;
        public BlogController(IHostingEnvironment env,
                  IConfiguration configuration, IBlogRepository postRepository
                )
        {
            _configuration = configuration;
            _env = env;
            _postRepository = postRepository;
        }
      
        [HttpGet("GetPostById")]
        public IActionResult Post(int id)
        {          
            var post = _postRepository.GetPostById(id);
            if(post==null)
            {
                Response.StatusCode = 404;
                return BadRequest();
            }
            return Ok(post);
        }
        [HttpGet("GetBlog")]
        public IActionResult Blog()
        {
            var list = _postRepository.GetAllPosts();
            //PostSearchViewModel post = new PostSearchViewModel()
            //{
            //    Blog = _postRepository.GetAllIQPosts(),
            //    Text = ""
            //};
            return Ok(list);
        }
        [HttpPost]
        public IActionResult Blog(PostSearchViewModel post)
        {
            if(!string.IsNullOrEmpty(post.Text))
            {
                post.Blog = _postRepository.GetPostByName(post.Text);
            }
            else
            {
                post.Blog = _postRepository.GetAllIQPosts();
            }
            return Ok(post);
           
        }
        public IActionResult Delete(int id)
        {
            var post = _postRepository.GetPostById(id);
            if (post.Img != null&&post.Img != "news.svg")
            {
               
                string filePath = Path.Combine(_env.WebRootPath,"img", post.Img);
                System.IO.File.Delete(filePath);
            }
            _postRepository.DeletePost(id);
            return RedirectToAction("Blog");

        }

        [HttpGet]
        public IActionResult Edit(int id)
        {
            BlogModel post = _postRepository.GetPostById(id);
            PostEditViewModel postEditViewModel = new PostEditViewModel
            {
                Id = post.Id,
                Name = post.Name,
                Author = post.Author,
                PrewText = post.PrewText,
                FullText = post.FullText,
                ExistImgPath = post.Img
            };
            return Ok(postEditViewModel);
        }
      
        [HttpPost]
        public IActionResult Edit(PostEditViewModel model)
        {

            if (ModelState.IsValid)
            {
                BlogModel post = _postRepository.GetPostById(model.Id);
                post.Author = model.Author;
                post.Name = model.Name;
                post.PrewText = model.PrewText;
                post.FullText = model.FullText;
                if (model.Img != null)
                {
                    if (model.ExistImgPath != null)
                    {
                        string filePath = Path.Combine(_env.WebRootPath, "img", model.ExistImgPath);
                        System.IO.File.Delete(filePath);
                    }
                    post.Img = UploadedFile(model);
                }

                _postRepository.UpdatePost(post);
                return RedirectToAction("Blog");
            }
            return Ok();
        }
        private string UploadedFile(PostEditViewModel model)
        {
            string uniqFileName = null;
            if (model.Img != null)
            {
                string uploadsFolder = Path.Combine(_env.WebRootPath, "img");
                uniqFileName = Guid.NewGuid().ToString() + "_" + model.Img.FileName;
                string filePath = Path.Combine(uploadsFolder, uniqFileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    model.Img.CopyTo(fileStream);
                }
            }

            return uniqFileName;
        }
    }
}