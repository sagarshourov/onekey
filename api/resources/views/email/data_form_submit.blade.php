@php



if(!function_exists('convert_camel')){

function convert_camel($key) {

// $arr = preg_split('/(?=[A-Z])/', $key);


return ucwords(preg_replace('/([a-z])([A-Z])/s','$1 $2', $key));


}
}



if(!function_exists('data_validation')){

function data_validation($data,$type){

if($type == 'datetime'){
return date("jS F Y", strtotime($data)) ;

}else{
return $data;
}


}


}




if(!function_exists('data_finds')){
function data_finds($data,$key,$type){


if(isset($data[$key]) && !is_array($data[$key])){ // normal data

return data_validation($data[$key],$type);

}else if(isset($data[$key]) && is_array($data[$key])){

if($type=='selectboxes'){
$html = '';
foreach($data[$key] as $ke => $dat){

$check = '';

if($dat==true){
$check ='checked';
}

$html .='
<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" '.$check .'>
    <label class="form-check-label"> '.$ke.'</label>
</div>
';


}

return $html;

}else if($type=="textfield" || $type=="phoneNumber" || $type=="datetime" || $type=="textarea" ){
$html = '<ul class="list-group list-group-flush">';
    foreach($data[$key] as $ke => $dat){

    $html .='<li class="list-group-item p-1">'.data_validation($dat,$type).'</li>';


    }
    $html .=' </ul>';

return $html;
}else{
return json_encode($data[$key]);
}
}else{
return (isset($data[$key]) ? json_encode($data[$key]) : '');
}
}
}

if(!function_exists('data_grid')){
function data_grid($data, $th, $key,$type){

$html = '';

$html .= '<table class="table mb-0">';
    $html .= '<tr>';
        foreach($th as $tr){
        $html .= '<th style="font-size: 11px;"> '. $tr['label'] .' </th>';
        }
        $html .= '</tr>';


    if(isset($data[$key]) && is_array($data[$key])){

    foreach($data[$key] as $ke => $dat){
    $html .= '<tr>';
        if(is_array($dat) && count($dat) > 0){

        foreach($dat as $key => $val){
        $html .= '<td> '. ( is_array($val) ? '' : $val ).' </td>';
        }

        }
        $html .= '</tr>';
    }
    }
    $html .= '</table>';
return $html;



}


}



if(!function_exists('recursive')){
function recursive($nodes , $data){

$html= '';

if(!isset($nodes['components'])){
return ;
}

foreach($nodes['components'] as $node){
if($node['type']=='columns'){

foreach($node['columns'] as $column){
$html .= recursive($column ,$data);

}

}else{

if($node['type']=='panel'){

$html .= '<div style="margin-top: 20px; margin-bottom: 20px; border: 1px solid #eee; box-shadow: 0 1px 1px rgba(0,0,0,.05);  width : 100%; clear : both; ">
    <div style="color: #333; background-color: #ececec; border-color: #ddd; padding: 5px; font-size : 12px; border-bottom: 1px solid transparent;">'.$node['title'].'</div>
    <div style="padding: 15px; overflow : auto; background-color: #f9f9f9; ">'.recursive($node,$data).'</div>
</div>';

}else if(isset($parent['title'])){

$html .= $node['label'];

}else if($node['type']=='datagrid'){

// $html = '<b>'.$node['label'].'</b>';

$dat = data_grid($data,$node['components'], $node['key'], $node['type']);
if($dat != ""){
$html .= $dat;

}


}else{

$dat = data_finds($data, $node['key'], $node['type']);
if($dat != ""){
$html .= '<table class="table mb-0">';
    $html .= '<tr>';
        $html .= '<td>' .$node['label'].'</td>';
        $html .= '<td class="text-right">' .$dat .'</td>';
        $html .= '</tr>';
    $html .= '</table>';

}

}

}


}

return $html;


}

}



@endphp


<h2>{{$title}}</h2>
<table class="table">
    <tr>
        <td>Name :</td>
        <td>{{ $user['first_name'] }}</td>
    </tr>
    <tr>
        <td>Email :</td>
        <td>{{ $user['email'] }}</td>
    </tr>
</table>







@foreach($con['components'] as $parent)



<div style="margin-top: 20px; margin-bottom: 20px; border: 1px solid #eee; box-shadow: 0 1px 1px rgba(0,0,0,.05);  width : 100%; clear : both; ">
    <div style="color: #333; background-color: #f5f5f5; border-color: #ddd; padding: 10px 15px; border-bottom: 1px solid transparent;">{{$parent['title']}}</div>
    <div style="padding: 15px; overflow : auto;  ">{!!recursive($parent, $data) !!}</div>
</div>



@endforeach