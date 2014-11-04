<div id="ctgslider">	
      <?php 
            wp_reset_query(); 
            $paged = (get_query_var('paged')) ? get_query_var('paged') : 1; 
            query_posts('category_name=slider&showposts=4&orderby=date&paged='.$paged); 
            ?>
            <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
            <div class="Caption"><?php the_title(); ?></div>
            <?php the_content(); ?>
            </a>
            </div>
                  <?php endwhile; ?>
                  <?php else : ?>
            <?php endif; ?>
</div>
