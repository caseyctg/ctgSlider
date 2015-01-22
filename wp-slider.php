<!-- 
Set a category of posts to slider and put an image in the featured image.
-->
<div id="ctgslider">	
<?php 
wp_reset_query(); 
query_posts('category_name=slider&orderby=date'); 
if (have_posts()) : while (have_posts()) : the_post(); ?>
            <div class="slider">
                
                <div class="Caption">
                    <?php the_title(); ?>
                </div>
                
                <?php if (has_post_thumbnail( $post->ID ) ): ?>
                    <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>
                    <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                        <?php echo $image[0]; ?>
                    </a>
                <?php endif; ?>
                
            </div>
<?php endwhile; else : endif; ?>
</div>