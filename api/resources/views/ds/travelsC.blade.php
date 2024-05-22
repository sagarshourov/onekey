<div style="margin-top: 100px; margin-bottom: 20px;  border: 1px solid #eee; box-shadow: 0 1px 1px rgba(0,0,0,.05);  width : 100%; clear : both; ">
    <div style="color: #333; background-color: #f5f5f5; border-color: #ddd; padding: 5px 10px; border-bottom: 1px solid transparent;"> Travel Companions </div>
    <div style="padding: 8px; overflow : auto;  ">

        <table class="table table-bordered">
            <tr>
                <td> <b> Are you traveling with anyone else?</b></td>
                <td> {{rYes($data,'travelingWithOrganization')}} </td>
            </tr>
            @if($data['travelingWithOrganization']==1)
            @foreach($data['travelers'] as $ti => $traveler)

            <tr>
                <td colspan="2">
                    <div class="card p-0">
                        <h6 class="card-header p-1">Purpose of the trip to the US # {{$ti+1}}</h6>
                        <div class="card-body p-0">
                            <table class="table mb-0 table-bordered">
                                <tr>
                                    <td> <b>What are the family name(s) of the person traveling with you?*</b></td>
                                    <td>{{$traveler['lastName']}}</td>
                                </tr>
                                <tr>
                                    <td><b> What are the first (given) name(s) of the person traveling with you?* </b></td>
                                    <td>{{$traveler['firstName']}}</td>
                                </tr>
                                <tr>
                                    <td><b> What is your relationship with the person traveling with you?* </b></td>


                                    <td> {{ getLabelByValue($selectData,'relation',$traveler,'relation') }}</td>
                                </tr>

                            </table>
                        </div>
                    </div>

                </td>

            </tr>

            @endforeach
            @endif


        </table>

    </div>
</div>