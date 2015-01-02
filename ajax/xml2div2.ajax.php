<?php 

require_once('../config.php');

//$xml_text = $_REQUEST['xml_text'];

$xml_text = file_get_contents('../private/xml_text.xml');
$xml = simplexml_load_string($xml_text) or Die("Poop");
$x_json = json_encode($xml);
$x_array = json_decode($x_json,TRUE);

echo array_to_div($x_array);

function array_to_div($array)
{
	foreach ($array as $k=>$v)
	{
		if (is_array($v))
		{		
			echo '<div id="'.$k.'"><h4>'.$k.'</h4>'.array_to_div($v).'</div>';
		}
		else
		{
			echo '<div id="'.$k.'"><h4>'.$k.'</h4>'.$v.'</div>'; 			
		}
	}
}

?>