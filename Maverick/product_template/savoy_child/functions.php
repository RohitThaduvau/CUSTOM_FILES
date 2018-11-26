<?php
	
	/* Styles
	=============================================================== */
	
	function nm_child_theme_styles() {
		 // Enqueue child theme styles
		 wp_enqueue_style( 'nm-child-theme', get_stylesheet_directory_uri() . '/style.css' );
	}
	add_action( 'wp_enqueue_scripts', 'nm_child_theme_styles', 1000 ); // Note: Use priority "1000" to include the stylesheet after the parent theme stylesheets

require_once(get_stylesheet_directory() . '/button_widget.php');
require_once(get_stylesheet_directory() . '/vc_custom.php');

//add single item slider scripts 
function get_slider_scripts() {
  echo '<script type="text/javascript" src="' . get_stylesheet_directory_uri() . '/slider.js"></script>';
}


/*-------Begin Shortcodes-------*/

add_shortcode('inline_custom_button', 'get_custom_button'); //Shortcode to use the custom button widget on page
add_shortcode('page_breadcrumbs', 'get_page_breadcrumbs'); //Add basic breadcrumbs to pages

//Shortcode to use the custom button widget on pages
function get_custom_button($atts) {
  ob_start();
  the_widget('Custom_Button', $atts);
  $output = ob_get_contents();
  ob_end_clean();
  return $output;
}

function get_page_breadcrumbs($id = null) {
	global $post;
	$item = $post;
	
	//Terminate on the home page
	$query = get_queried_object();
	if(is_front_page() || (is_archive() && $query->taxonomy === 'product_cat')) {
		return;
	}
	echo '<div class="page-breadcrumbs">';
	
	if(!empty($id)) {
		$item = get_post($id);
	}

	$breadcrumbs = array(); //Initialize array of breadcrumbs
	$breadcrumbs[] = (empty($id) ? get_the_title() : '<a href="' . get_permalink($id) . '">' . get_the_title($id) . '</a>');
    
	$ancestors = get_post_ancestors($item);//Get "ancestor" posts of current posts
    
    //Get ancestors as links
	foreach($ancestors as $ancestor) {
		$breadcrumbs[] = '<a href="' . get_permalink($ancestor) . '">' . get_the_title($ancestor) . '</a>';
	}
    
	$breadcrumbs = array_reverse($breadcrumbs); //Reorder to use correct order
    
	echo implode(' <span style="color: #333;">\\</span> ', $breadcrumbs); //Concatenate the individual breadcrumbs into a single string
	echo '</div>';
}

/*-------End Shortcodes-------*/

add_filter( 'gform_submit_button', 'required_text' );

function required_text( $button) {
    return $button . '<br />
	<span class="required-text">*Required</span>';
}

$return_priority = 19;

add_action( 'woocommerce_product_query', 'custom_pre_get_posts_query' );
remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price');
add_action('woocommerce_after_shop_loop_item_title', 'woocommerce_price_msrp');
add_action( 'woocommerce_after_shop_loop_item_title', 'remove_after_shop_loop_item_actions', 1);
add_action('woocommerce_shop_loop_item_title', 'athlete_fields');
add_action('woocommerce_after_shop_loop_item', 'product_excerpt', 1);
add_action('woocommerce_before_main_content', 'get_archive_intro');
add_action('woocommerce_before_main_content', 'get_sub_cat_content');
add_action('woocommerce_before_main_content', 'get_product_categories', 11);
add_action('woocommerce_single_product_summary', 'athlete_number', 6);
add_action('woocommerce_single_product_summary', 'product_customize_button', 25);
add_action('woocommerce_single_product_summary', 'find_retailer_btn', 31);
add_action( 'woocommerce_after_single_product_summary', 'return_to_top', 19);
add_action( 'woocommerce_after_single_product_summary', 'setup_athlete_related_equipment', 1);
add_action( 'woocommerce_after_single_product_summary', 'setup_related_equipment', 1);

function remove_after_shop_loop_item_actions() {
	remove_all_actions( 'woocommerce_after_shop_loop_item' );
	add_action('woocommerce_after_shop_loop_item', 'product_archive_desc', 10);
}
function product_archive_desc() {
	$query = get_queried_object();
	if($query->name === 'Athletes' && !is_single()) {
		return;
	}
	$product = pods('product', get_the_ID());
	echo '<p>' . 
		$product->field('product_archive_desc') . 
	'</p>';
}
function woocommerce_price_msrp() {
	$query = get_queried_object();
	if($query->name === 'Athletes' || (get_post_type() === 'product') && has_term('athletes', 'product_cat')) {
		return;
	}
	global $product;
	$sale_price = $product->get_sale_price();
	echo '<span class="price">
		MSRP ' . 
		(!empty($sale_price) ? "<del>" : "") . 
			'<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>' . $product->get_regular_price() . '</span>' . 
		(!empty($sale_price) ? '</del><ins>
			<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>' . $sale_price . '</span>
		</ins>
		' : "") . 
	'</span>';
}

function product_excerpt() {
	$query = get_queried_object();
	if($query->name === 'Athletes') {
		return;
	}
	the_excerpt();
}
function athlete_fields() {
	$query = get_queried_object();
	if($query->name !== 'Athletes' && !(get_post_type() === 'product') && has_term('athletes', 'product_cat')) {
		return;
	}
	$img = get_field('team_logo');
	if(!empty($img)) {
		echo '<div class="team-logo">
			<img src="' . $img['url'] . '" alt="' . $img['alt'] . '" />
		</div>';
	}
	athlete_number();
	echo get_field('team');
}

$archive_css = '';
function get_archive_intro() {
	if(!is_archive()) {
		return;
	}
	
	global $archive_css;
	$slug = '';
	$product = get_queried_object();
	if(is_tax()) {
		$slug = $product->slug;
	}
	$args = array(
		'post_name'	=> $slug,
		'post_type'   => 'page',
		'post_status' => 'publish',
		'numberposts' => 1
	);
	$pos = 0;
	$page = get_page_by_path($slug,OBJECT,'page');
	if(!empty($page)) {
		echo '<div class="nm-row">' . 
			do_shortcode($page->post_content) . 
		'</div>';
		while(strpos($page->post_content, 'css=', $pos) !== false) {
			$pos_start = strpos($page->post_content, 'css=', $pos) + 5;
			$pos = strpos($page->post_content, '"', $pos_start);
			$archive_css .= substr($page->post_content, $pos_start, $pos - $pos_start) . ' ';
		}
	}
	remove_action('wp_footer', 'get_archive_css');
	add_action('wp_footer', 'get_archive_css');
}
function remove_product_breadcrumbs() {
	global $wp_filter;
	print_r($wp_filter['woocommerce_before_main_content']);
}
function get_sub_cat_content() {
	if(is_single()) {
		return;
	}
	$cur_term = get_term(get_queried_object()->term_id);
	$terms_temp = get_terms(array(
		'taxonomy' => 'product_cat',
		'parent' => $cur_term->term_id,
		'hide_empty' => false,
	));
	if(empty($cur_term) || empty($terms_temp) || is_search()) {
		return;
	}
		echo '<div class="nm-row subcat-header">
			<div class="nm-row nm-row-full ">
				<div class="nm_column col-sm-12">
					<div class="wpb_wrapper">
						<div class="nm-product-categories packery-enabled">
							<div class="woocommerce columns-2">
								<ul class="nm-products products xsmall-block-grid-1 small-block-grid-1 medium-block-grid-2 large-block-grid-2 show" style="position: relative;">';
		$i = 0;
		$j = 0;
		$terms = array();
		foreach($terms_temp as $term) {
			$weight = get_field('cat_weight', $term);
			$weight = (!empty($weight) ? $weight : 0);
			if(intval($weight) === -1) {
				continue;
			}
			$terms[$weight][] = $term;
		}
		ksort($terms);
	
		foreach($terms as $term_group) {
			foreach($term_group as $term) {
				$meta = get_term_meta($term->term_id);
				echo '<li class="product-category product' . ($i === 0 && $j === 0 ? ' first' : ($i === count($terms) - 1 ? ' last' : '')) . '">

					<div class="nm-product-category-inner">

						<a href="/product-category/' . $term->slug . '">' .  
							wp_get_attachment_image($meta['thumbnail_id'][0], 'full') .				
						'</a>

						<div class="nm-product-category-text">
							<!-- Pixel Change to add in a link to the h1 -->
							<h1 class="nm-product-category-heading">' . $term->name . '</h1>
							<!-- End Pixel Change to add in an anchor around the h1 -->
							<a href="/product-category/' . $term->slug . '" class="invert-color">' . $term->description . '</a>
						</div>

					</div>
				</li>';
				$j++;
			}
			$i++;
		}
		echo '</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>';
	
	remove_action('wp_footer', 'archive_includes_element', 12);
	remove_action('wp_footer', 'get_packery_scripts', 25);
	remove_action('wp_footer', 'normalize_cat_links', 99);
	
	add_action('wp_footer', 'archive_includes_element', 12);
	add_action('wp_footer', 'get_packery_scripts', 25);
	add_action('wp_footer', 'normalize_cat_links', 99);
}
function get_packery_scripts() {
	?>
	<script type='text/javascript' src='<?php echo get_template_directory_uri(); ?>/js/plugins/packery.pkgd.min.js?ver=1.3.2'></script>
	<?php
}
function archive_includes_element() {
	?>
	<script>
		jQuery('#nm-page-includes').addClass('product_categories product_categories_packery');
	</script>
	<?php
}
function normalize_cat_links() {
	?>
	<script>
		setTimeout(function() {
			console.log(jQuery('.subcat-header').find('.packery-enabled').find('a'));
			jQuery('.subcat-header').find('.packery-enabled').find('a').off('click');
		}, 100);
	</script>
	<?php
}

add_filter( 'gform_enable_field_label_visibility_settings', '__return_true' );

function get_product_categories() {
	$query = get_queried_object();
	if($query->name !== 'product' && ($query->taxonomy !== 'product_cat' || $query->name === 'Athletes') || is_archive()) {
		return;
	}
	echo '<div class="nm-row nm-row-full product-categories">
		<div class="nm_column col-sm-12">
			<div class="wpb_wrapper">';
	$terms = get_terms(array(
		'taxonomy' => 'product_cat',
	));
	$cat_menu = array('<a href="/products"' . (isset($query->taxonomy) ? '' : ' class="current-menu-item"') . '>All</a>');
	$excluded_cats = array('mens', 'womens', 'accessories', 'athletes');
	if(!empty($terms)) {
		foreach($terms as $term) {
			if(in_array($term->slug, $excluded_cats)) {
				continue;
			}
			$cat_menu[] = '<a href="/product-category/' . $term->slug . '/"' . ($query->name === $term->name ? ' class="current-menu-item"' : '') . '>' . $term->name . '</a>';
		}
	}
	echo implode('&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;', $cat_menu) .
			'</div>
		</div>
	</div>';
}
function get_archive_css() {
	global $archive_css;
	echo '<style>' .
		$archive_css . 
	'</style>';
}

add_action( 'wp_enqueue_scripts', 'add_theme_stylesheet' );

function add_theme_stylesheet() {
	if(!is_archive()) {
		return;
	}
    wp_enqueue_script( 'wpb_composer_front_js' );
    wp_enqueue_style( 'js_composer_front' );
    wp_enqueue_style( 'js_composer_custom_css' );
}

function product_hover() {
	$hover_img = get_field('featured_img_2', get_the_ID());
	if(!empty($hover_img)) {
		echo nm_product_thumbnail( $hover_img['ID'] );
	}
}

function return_to_top() {
	global $return_priority;
	if(is_single() && has_term('athletes', 'product_cat') && $return_priority === 19) {
		$return_priority = 21;
		add_action( 'woocommerce_after_single_product_summary', 'return_to_top', 30);
		return;
	}
	echo '<div class="centered-button-wrap">' . 
		get_custom_button(array(
			'content' => 'Back to Top',
			'link_url' => '#product-' . get_the_ID(),
			'class' => 'hover-red',
			'style' => 'display: inline-block; border: 1px solid #333;',
			'hover_anim' => 'hover-fill-up',
		)) .
	'</div>';
}

function custom_pre_get_posts_query( $q ) {
	$query = get_queried_object();
	if($query->name === 'Athletes') {
		return;
	}
    $tax_query = (array) $q->get( 'tax_query' );

    $tax_query[] = array(
           'taxonomy' => 'product_cat',
           'field' => 'slug',
           'terms' => array( 'athletes' ), // Don't display products in the clothing category on the shop page.
           'operator' => 'NOT IN'
    );


    $q->set( 'tax_query', $tax_query );

}
function athlete_number() {
	$number = get_field('number');
	if(!empty($number)) {
		echo '<div class="player-number">' . 
			$number . 
		'</div>';
	}
}
function product_customize_button() {
	if(has_term('athletes', 'product_cat')) {
		return;
	}
	echo '<a href="http://factorycustom.com/" target="_blank" class="customize-button"><img src="' . get_stylesheet_directory_uri() . '/images/customize_button.png" alt="Customize" /></a>';
}
function setup_athlete_related_equipment() {
	if(!has_term('athletes', 'product_cat')) {
		return;
	}
	remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_template_single_meta', 12 );
	remove_action('woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20);
	add_action('woocommerce_after_single_product_summary', 'athlete_related_equipment', 20);
}

function athlete_related_equipment() {
	echo '<section id="nm-related" class="related products">
        
        <div class="nm-row">
        	<div class="col-xs-12">

                <h2>Related Equipment</h2>

                <ul class="nm-products products xsmall-block-grid-2 small-block-grid-2 medium-block-grid-4 large-block-grid-4">';
	$athlete_pod = pods('product', get_the_ID());
	$related = $athlete_pod->field('related_equipment');
	$i = 0;
	if(!empty($related)) {
		foreach($related as $product) {
			$i++;
			if($i > 5) {
				break;
			}
			$product_pod = pods('product', $product['ID']);
			$product_obj = wc_get_product($product['ID']);
			echo '<li class="post-' . $product['ID'] . ' product type-product status-publish has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes hover-image-loaded">
				<div class="nm-shop-loop-thumbnail nm-loader">
					<a href="' . $product['guid'] . '" class="woocommerce-LoopProduct-link">' .
						get_the_post_thumbnail($product['ID']) . 
					'</a>
				</div>
				<div class="nm-shop-loop-details">
					<div class="nm-shop-loop-wishlist-button">
						<a href="#" id="nm-wishlist-item-' . $product['ID'] . '-button" class="nm-wishlist-button nm-wishlist-item-' . $product['ID'] . '-button" data-product-id="' . $product['ID'] . '" title="Add to Wishlist">
							<i class="nm-font nm-font-heart-o"></i>
						</a>
					</div>
					<h3>
						<a href="' . $product['guid'] . '">' . $product['post_title'] . '</a>
					</h3>
					<div class="nm-shop-loop-after-title action-link-hide">
						<div class="nm-shop-loop-price">
							<span class="price">MSRP <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>' . $product_obj->get_price() . '</span></span>            
						</div>
						<div class="nm-shop-loop-actions">
							<p>' . $product_pod->field('product_archive_desc') . '</p>
							<a href="' . $product['guid'] . '" data-product_id="' . $product['ID'] . '" class="nm-quickview-btn product_type_variable">Show more</a>           
						</div>
					</div>
				</div>
			</li>';
		}
	}
	echo '</ul>
                
            </div>
        </div>

	</section>';
}


function setup_related_equipment() {
	if(!has_term('manual_related_equipment','product_cat')) {
		return;
	}
	remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_template_single_meta', 12 );
	remove_action('woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20);
	add_action('woocommerce_after_single_product_summary', 'related_equipment', 20);
}


function related_equipment() {
	echo '<section id="nm-related" class="related products testing">
        
        <div class="nm-row">
        	<div class="col-xs-12">

                <h2>Related Equipment</h2>

                <ul class="nm-products products xsmall-block-grid-2 small-block-grid-2 medium-block-grid-4 large-block-grid-4">';
                
	$product_pod = pods('product', get_the_ID());
	$related = $product_pod->field('related_equipment');
	$i = 0;
	if(!empty($related)) {
		foreach($related as $product) {
			$i++;
			if($i > 5) {
				break;
			}
			$product_pod = pods('product', $product['ID']);
			$product_obj = wc_get_product($product['ID']);
			echo '<li class="post-' . $product['ID'] . ' product type-product status-publish has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes hover-image-loaded">
				<div class="nm-shop-loop-thumbnail nm-loader">
					<a href="' . $product['guid'] . '" class="woocommerce-LoopProduct-link">' .
						get_the_post_thumbnail($product['ID']) . 
					'</a>
				</div>
				<div class="nm-shop-loop-details">
					<div class="nm-shop-loop-wishlist-button">
						<a href="#" id="nm-wishlist-item-' . $product['ID'] . '-button" class="nm-wishlist-button nm-wishlist-item-' . $product['ID'] . '-button" data-product-id="' . $product['ID'] . '" title="Add to Wishlist">
							<i class="nm-font nm-font-heart-o"></i>
						</a>
					</div>
					<h3>
						<a href="' . $product['guid'] . '">' . $product['post_title'] . '</a>
					</h3>
					<div class="nm-shop-loop-after-title action-link-hide">
						<div class="nm-shop-loop-price">
							<span class="price">MSRP <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>' . $product_obj->get_price() . '</span></span>            
						</div>
						<div class="nm-shop-loop-actions">
							<p>' . $product_pod->field('product_archive_desc') . '</p>
							<a href="' . $product['guid'] . '" data-product_id="' . $product['ID'] . '" class="nm-quickview-btn product_type_variable">Show more</a>           
						</div>
					</div>
				</div>
			</li>';
		}
	}
	echo '</ul>
                
            </div>
        </div>

	</section>';
}

function find_retailer_btn() {
	if(is_single() && has_term('athletes', 'product_cat')) {
		return;
	}
	echo get_custom_button(array(
		'content' => 'Find a Retailer',
		'link_url' => '/find-a-store/',
		'style' => 'color: #fff; background-color: #c8102e; border-color: #c8102e;',
		'class' => 'hover-fill-up hover-darker-red hover-anim',
	));
}

add_action('wp_footer', 'do_vc_custom_styles'); //Display custom styles from Visual Composer that can't be set inline

$vc_custom_styles = '';

function do_vc_custom_styles() {
	global $vc_custom_styles;
	
	echo '<style>' .
		$vc_custom_styles . 
	'</style>';
}

add_action('wp_footer', 'normalize_product_search');

function normalize_product_search() {
	?>
	<script>
		setTimeout(function() {
			jQuery('.nm-shop-search-input-wrap form input').off();
		}, 100);
	</script>
	<?php
}


/*
* Sumanta
*/

function remove_gallery_thumbnail_images() {
if ( is_product() ) {
    //remove_action( 'woocommerce_product_thumbnails', 'woocommerce_show_product_thumbnails', 20 );
	
    }
}
add_action('loop_start', 'remove_gallery_thumbnail_images');

//remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 20 );



function isMobile() {
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}


function mygtry() {
	echo '<div class="woocommerce-product-gallery" style="background: #fdfd5a; padding: 1em 2em; position: absolute; top: 180px;">';
    echo '<span>THIS IS A TEST. YOU CAN ADD TEXT, IMAGES AND ANY HTML</span>';
    echo '</div>';
}
if(!isMobile) {
	remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 20 );
	add_action( 'woocommerce_before_single_product_summary', 'mygtry', 49 );
} 