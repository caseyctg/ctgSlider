<!-- 
Set a category of posts to slider and put an image in the featured image.
-->
<div id="ctgslider">	
      <?php 
            wp_reset_query(); 
            $paged = (get_query_var('paged')) ? get_query_var('paged') : 1; 
            query_posts('category_name=slider&showposts=4&orderby=date&paged='.$paged); 
            ?>
            <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
            <div class="Caption"><?php the_title(); ?></div>
              
            <?php if (has_post_thumbnail( $post->ID ) ): ?>
                <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>
                <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                    <?php echo $image[0]; ?>
                </a>
            <?php endif; ?>
    
            </div>
                  <?php endwhile; ?>
                  <?php else : ?>
            <?php endif; ?>
</div>
