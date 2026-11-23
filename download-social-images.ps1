$ErrorActionPreference = 'Stop'
$dir = Join-Path $PSScriptRoot 'assets\images'
New-Item -ItemType Directory -Force -Path $dir | Out-Null

# High-resolution versions of photos published on Stallion Outlook's own
# Facebook / Instagram pages. Facebook's ctp parameter controls the delivered size.
$images = @(
  @{ name = 'post-2025-easter.jpg';  url = 'https://scontent.facc6-1.fna.fbcdn.net/v/t51.75761-15/491276053_18348253420159330_4911005754891686952_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1440&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gLULxuPqRJwQ7kNvwGm-gTF&_nc_oc=AdoK2Bf6MJSH0rXos49fWmTf56mch2BmyvcZMp8tF5YBUDW7Moe37ZVIDyiUDKG-93Q&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=mjAWSqEwZqWoUpbGMONe8A&_nc_ss=79289&oh=00_AQRpA2xlCn_0aEqFZlik-S-I-wwxF9RQkZt-A_Dl92iwhg&oe=6B0A2402' },
  @{ name = 'post-2025-april.jpg';   url = 'https://scontent.facc6-1.fna.fbcdn.net/v/t51.75761-15/491504917_18348175063159330_2676310786043025165_n.jpg?stp=c0.117.1440.1440a_dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=09d16d&_nc_ohc=gLoDV37FjkIQ7kNvwEQ5Y7m&_nc_oc=AdpkgpJWj_9HT7VKZmS7OsZY7E9u3O9dZvC7YVoO167-SBSBheJ6tSb1laVFsRCB2Wg&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=9d01hjLolLbZQTTz5MPu9Q&_nc_ss=79289&oh=00_AQRgc8iqFEiWAvvejhgOUcWCXOc1kkAr4Co9DdoB5MDqYw&oe=6B0A0914' },
  @{ name = 'post-2024-a.jpg';       url = 'https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/467674898_18330843460159330_4417905391930618453_n.jpg?stp=c0.119.1440.1440a_dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=09d16d&_nc_ohc=3HLjJ7eh5PoQ7kNvwH1PHp0&_nc_oc=Adr_2xnw9qPmqZNRBUX0GHfAjaG0cXBrpRgCo4wPoX16yI_5HSRi44vRDX3UQwf9X30&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=9d01hjLolLbZQTTz5MPu9Q&_nc_ss=79289&oh=00_AQQ4dySsSuGbz0xd2Wi3fnfa-OFc5EJ-17is1hw83_yXcQ&oe=6B09F17F' },
  @{ name = 'post-2024-b.jpg';       url = 'https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/467347015_18330843388159330_3042473960208769747_n.jpg?stp=c0.119.1440.1440a_dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=09d16d&_nc_ohc=ZN5F1kfRxR4Q7kNvwF_FLJj&_nc_oc=AdrO2fuGgDfSqRSF0avt5pF1s-VU4qbFoxAgCB__4zO3po8uRUnlgIOpiEGbO6fEn0U&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=9d01hjLolLbZQTTz5MPu9Q&_nc_ss=79289&oh=00_AQSvhh1tvIjjXFwE75H9D6hCwMf19uKGsuB8qPOSJI4X-Q&oe=6B0A17EE' },
  @{ name = 'post-2024-c.jpg';       url = 'https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/467899627_18330843391159330_8623134753432440624_n.jpg?stp=c0.119.1440.1440a_dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=09d16d&_nc_ohc=STFxsVzEGs0Q7kNvwGaBKL2&_nc_oc=AdpNJKQKyE_Z221YG6U_k2JkJxQqv_xYZVP02eJJAfYrovXMz2zAqKukf2pdXq4h8-0&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=9d01hjLolLbZQTTz5MPu9Q&_nc_ss=79289&oh=00_AQQb3zB1-LoYqDP_dhQvk7ZFQgUSEM8lMU_BfDdizmmX9g&oe=6B0A13DF' },
  @{ name = 'post-2024-d.jpg';       url = 'https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/467993889_18330843364159330_4100285110561197908_n.jpg?stp=c0.119.1440.1440a_dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=09d16d&_nc_ohc=eouwT2x0Te4Q7kNvwGpWW1L&_nc_oc=Adq5YdSgVlO4fJF1Pt3MHsOVDLo-SJG6FdqA88Q6MzvrxqASVHGaWnSR4c27sRj5SME&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=9d01hjLolLbZQTTz5MPu9Q&_nc_ss=79289&oh=00_AQS58CmqtesLAdrNsJTPRlENzHf2ALsfo7-fgFM5miWnIg&oe=6B0A23AB' },
  @{ name = 'post-style-a.jpg';      url = 'https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/475849012_925217026427301_1452231380958138913_n.jpg?stp=c0.119.1440.1440a_dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=09d16d&_nc_ohc=bd8olIOMhLAQ7kNvwGWRcag&_nc_oc=Adra1XB9qkPOVuuz3DVPhYSlOFzQS8NPE4AGy27-Fz8yrv1fzOwNCg2WU3Mc9o_s7eI&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=9d01hjLolLbZQTTz5MPu9Q&_nc_ss=79289&oh=00_AQTmjFUgJ-Bo3DJ2MEXCO0yL6zzRiHiSoQcPjcro18qIRg&oe=6B0A0F89' },
  @{ name = 'post-style-b.jpg';      url = 'https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/475803264_925178953097775_7624436731181787911_n.jpg?stp=dst-jpg_tt6&cstp=mx1120x1120&ctp=s1120x1120&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=09d16d&_nc_ohc=uwZk6acWS_gQ7kNvwEYRa_x&_nc_oc=AdqDkVVqLCXcRYi328RsyK-htNgUb1qlckM_wULOdLjQC_KTkt_y2266gWlSj9ov9H4&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=9d01hjLolLbZQTTz5MPu9Q&_nc_ss=79289&oh=00_AQSHqS-8wuETirYDfqcE6n2MTxtnXD7ZqbPQPKr0WsYBFQ&oe=6B0A2479' },
  @{ name = 'post-style-c.jpg';      url = 'https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/476225269_925079839774353_4072953160882894157_n.jpg?stp=c0.40.1440.1440a_dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=09d16d&_nc_ohc=eYwjZnPg2ccQ7kNvwGg7fnr&_nc_oc=AdoDxL1iYjGoL9m7fZ3zQTduxnH7hKyfL8wQnPUKzzbdCTkDX0Q6kCwNAUNyrpBzV98&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=9d01hjLolLbZQTTz5MPu9Q&_nc_ss=79289&oh=00_AQQrj5Uc7YAa1TUvcdd28nHYFB7AIXTfXsUGs7IKFA_qLw&oe=6B0A0D6A' }
)

Add-Type -AssemblyName System.Drawing
foreach ($img in $images) {
  $out = Join-Path $dir $img.name
  try {
    Invoke-WebRequest -Uri $img.url -OutFile $out -TimeoutSec 40 -UseBasicParsing
    $i = [System.Drawing.Image]::FromFile($out)
    "{0}: {1}x{2} ({3:N0} KB)" -f $img.name, $i.Width, $i.Height, ((Get-Item $out).Length / 1KB)
    $i.Dispose()
  } catch {
    "FAILED {0}: {1}" -f $img.name, $_.Exception.Message
  }
}
