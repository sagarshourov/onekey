@php



if(!function_exists('convert_camel')){

    function convert_camel($key) {

     //  $arr = preg_split('/(?=[A-Z])/', $key);


       return ucwords(preg_replace('/([a-z])([A-Z])/s','$1 $2', $key));

    
    } 
}
if(!function_exists('data_finds')){
function data_finds($data,$key){ 


    if(isset($data[$key]) && !is_array($data[$key])){

        return $data[$key];

    }else if(isset($data[$key]) && is_array($data[$key])){


        $re = false;
        foreach($data[$key] as $ke => $dat){
                if($dat){
                    $re = $ke.", ".$re;

                }

        }

        if($re==false){
            return json_encode($data[$key]);
        }else{
            return $re;
        }
        
    
    }else{
        return '';
    }


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
                            <div style="color: #333; background-color: #ececec; border-color: #ddd; padding: 10px 15px; border-bottom: 1px solid transparent;">'.$node['title'].'</div>
                            <div style="padding: 15px; overflow : auto; background-color: #f9f9f9; ">'.recursive($node,$data).'</div>
                          </div>';

            }else if(isset($parent['title'])){
            
              
                
                    $html .= $node['label'];
                  
              
            
            
            }else{
                $dat = data_finds($data, $node['key']);
                  if($dat != ""){
                    $html .= '<table class="table mb-0">';
                    $html .= '<tr>';
                    $html .= '<td >' .$node['label'].'</td>';
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

<!DOCTYPE html>
<html >
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{$title}}</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
 
</head>
<body>






<h2>{{$title}} </h2>
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
        <div style="overflow : auto; padding : 10px ">{!!recursive($parent, $data) !!}</div>
    </div>



@endforeach






</body>
</html>


