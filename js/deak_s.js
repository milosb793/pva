var saradnik_id;

// ### ПРИКАЗ ЛИСТЕ И ФОРМЕ ЗА ДОДАВАЊЕ САРАДНИКА ### //
$('#deaktivirajSaradnikaLink').click(function()
{

    $.get(
        "ajax/deaktiviranjeSaradnika.php?zid=1000",
        {},
        function (podaci, status)
        {
            $("#sadrzaj").html(podaci);

            $('#deaktivirajSaradnikaDiv').toggle(function ()
                {
                    if ($(this).css('display') == 'none')
                    {
                        $(this).prop('hidden', 'hidden');
                    }
                    else
                    {
                        $(this).removeProp('hidden');
                        $(this).css('display', 'block');
                    }
                }
            );

            $("#saradnici2").change(function ()
            {
                saradnik_id = $(this).find("option:selected").val();

                if (saradnik_id !== undefined || saradnik_id != null || saradnik_id > 0)
                {
                    $("#deaktiviraj").click(function ()
                    {
                        $.post("ajax/deaktiviranjeSaradnika.php?zid=2",
                            {sid: saradnik_id},
                            function (odgovor, status) {
                                alert(odgovor);
                            });
                    });
                }
                else alert("ИД није у реду:" + saradnik_id);

            });
        });
});

