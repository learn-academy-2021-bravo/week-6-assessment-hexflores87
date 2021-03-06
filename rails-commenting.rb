# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
#  This purpose represents creating a controller called BlogPostsController. In a standard rails application all the apps controllers are inherited from the ApplicationController.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    #  represents the instance variable from the controller method.
    @posts = BlogPost.all
  end

  def show 
    # ---3) Lists one item in the model
    # 
    @post = BlogPost.find(params[:id])
  end

  # ---4) Shows a form to the user.
  def new
    @post = Post.new
  end

  def create
    # ---5) This will add info to the DB
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) This will edit the DB
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Changes the DB.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) This will remove ino from DB
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private is used to protect the params. 
  private
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content)
  end

end
