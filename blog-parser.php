<?php
function ma(){
	while( ($blog = fgets( STDIN ) ) != 'EOF' ){
		$p = "/p(.*)/";
		$h1 = "/h1(.*)/";
		$h2 = "/h2(.*)/";
		$h3 = "/h3(.*)/";
		$h4 = "/h4(.*)/";
		$h5 = "/h5(.*)/";
		$h6 = "/h6(.*)/";
		$a = "/a(.*)/";
		$code = "/code(.*)/";
		 	

		if ( preg_match( $p, $blog, $matches) ){
			if( preg_match( $p, $matches[1], $matches ) ){
				echo "<p>$matches[1]<o/p>";
			} else {
				echo "<p>$matches[1]</p>";
			}
		} else if ( preg_match( $h1, $blog, $matches) ){
			echo "<h1> $matches[1] </h1> \n";
		} else if ( preg_match( $h2, $blog, $matches ) ){
			echo "<h2> $matches[1] </h2> \n";
		} else if ( preg_match( $h3, $blog, $matches ) ){
			echo "<h3> $matches[1] </h3> \n";
		} else if ( preg_match( $a, $blog, $matches ) ){
			echo "<a> $matches[1] </a> \n";
		}
	}

}
ma();
?>
