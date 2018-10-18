<?php

    $url = "https://peakathletics.oc.demandware.net/3.9.7/api/core/v1/shipments/search";

    $guid = "c6b53990-d5cc-4427-968c-a8ac01344284";
    $geturl = "https://peakathletics.oc.demandware.net/3.9.7/api/core/v1/shipments/c6b53990-d5cc-4427-968c-a8ac01344284";

    $headers = [
        "x-dw-apitoken: 0CC2C144DB7641C599523298DDD22AA3",
        "x-dw-domain: peakathletics.com",
        "Content-Type: application/xml",
        "Host: peakathletics.oc.demandware.net",
        "Accept-Language: en-us",
        "Accept: application/xml"
    ];

    $xml = '<shipment_search_request xmlns="urn:demandware.com:bf:api:core:v1" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <count>25</count>
    <query>closed=1</query>
    <select>id,guid,track,shippingOrderGuid,shipping_method_id,shipping_method_description</select>
    <sync>
      <filter>new</filter>
      <guid>c6b53990-d5cc-4427-968c-a8ac01344284</guid>
    </sync>
</shipment_search_request>';
// and void=0 and site_cd in ("SAPUS","SAPCA","CSTSKATES")

    $ch = curl_init(); 

    curl_setopt($ch, CURLOPT_URL,$url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $data = curl_exec($ch); 
    
    echo $data;
    
    if(curl_errno($ch))
        print curl_error($ch);
    else
        curl_close($ch);
?>
