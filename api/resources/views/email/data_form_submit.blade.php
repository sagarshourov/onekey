@php



if(!function_exists('convert_camel')){

    function convert_camel($key) {

     //  $arr = preg_split('/(?=[A-Z])/', $key);


       return ucwords(preg_replace('/([a-z])([A-Z])/s','$1 $2', $key));

    
    } 
}
function data_find($data,$key){ 


    if(isset($data[$key]) && !is_array($data[$key])){

        return $data[$key];

    }else if(isset($data[$key]) && is_array($data[$key])){
        
       return json_encode($data[$key]);
    }else{
        return '';
    }


}


function recursive($nodes , $data){

    $html= '';

    if(!isset($nodes['components'])){
        return ;
    }

    foreach($nodes['components'] as $node){
        if($node['type']=='columns'){
            $html .='<div style="width:100%; clear : both; overflow : auto; margin-bottom: 20px; ">';
                foreach($node['columns'] as $column){
                    $html .= recursive($column ,$data);
                
                }

            $html .='</div>';
        }else{

           if($node['type']=='panel'){

                     $html .= '<div style="margin-top: 20px; margin-bottom: 20px; border: 1px solid #eee; box-shadow: 0 1px 1px rgba(0,0,0,.05);  width : 100%; clear : both; ">
                            <div style="color: #333; background-color: #ececec; border-color: #ddd; padding: 10px 15px; border-bottom: 1px solid transparent;">'.$node['title'].'</div>
                            <div style="padding: 15px; overflow : auto; background-color: #f9f9f9; ">'.recursive($node,$data).'</div>
                          </div>';

            }else{
                $dat = data_find($data, $node['key']);
                if($dat != ""){

                    $html .= '<div style="border: 1px solid #eee; padding : 10px; width : 50%; float:left; clear:right;">' .$node['label'].'</div>';
                    $html .= '<div style="border: 1px solid #eee; padding : 10px; width : 40%; float:left; clear:right;">' .$dat .'</div>';
                }
           }
            
        }


    }

    return $html;

    
}



@endphp 


<h2>{{$title}} has submitted</h2>
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










