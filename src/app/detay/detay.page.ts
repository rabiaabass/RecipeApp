import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {
  public yemekler:any;
  public yemekDetay:any;
  public no:any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.no = this.activatedRoute.snapshot.paramMap.get('icerik');

    this.yemekler = [{id:0,adi:'Adana Kebap',resim:'https://im.haberturk.com/2019/12/04/ver1575459460/adana-kebap_2546270_810x458.jpg',kategori:'Kebap',tarif:'Soğanları küp küp doğrayın. Suyunu süzerek derin bir kaba alın.Sarımsakları ezerek soğanlarla karıştırın. Kuzu kıymayı ve dana kıymayı karıştırarak soğan ve sarımsak karışımı ile harmanlayın.Pul biber, karabiber ve acı biber salçasını karışıma yedirin.Sıvıyağı ekleyin. Maydanozları ince ince doğrayın ve karışıma ekleyin.Harcı dolapta 2-3 saat dinlendirin.Fırının ızgara telini kasaptan alabileceğiniz kuyruk yağı ile yağlayın, yoksa tereyağı ile yağlayabilirsiniz.Fırını 200 derecede fansız programda ısıtın.Yassı şişlere eti yayarak dizin.Izgara telinin üzerine dizin. 20-25 dakika pişirin. Afiyet olsun!',malzemeler:[{adi:'350 gramdana kıyma'},{adi:'1 diş sarımsak'},{adi:'2 adet kuru soğan'},{adi:'2 yemek kaşığı sıvı yağ'},{adi:'baharatlar'}]},
    {id:1,adi:'Urfa Kebap',resim:'https://cdn.yemek.com/mnresize/940/940/uploads/2019/01/ev-usulu-urfa-kebap-tarifi.jpg',kategori:'Kebap',tarif:'Etin derin bir kabın içerisine alın. Üzerine rendelenmiş sarımsağı, rendelenmiş soğanı, salça ve diğer malzemeleri de ilave edin.Etinizi en az 10-15 dakika kadar yoğurun. Güzelce kıvam alması ve yoğrulması gerekiyor.Hazırladığınız harcı eşit miktarlarda bezelere ayırın. Evinizde varsa çöp şiş, kalın ahşap pişirme çubuğu ya da fırına girebilen metal çubuklara etinizi geçirin.Elinizle güzelce sıkarak ve hafif yayvan da bırakarak etinizi pişirme çubuklarınızın üzerine güzelce yerleştirin. Bir tepsinin içerisine dizip buzdolabında en az 15 dakika kadar dinlendirin.Pişirme kağıdı serili fırın tepsinizine aralıklı bir şekilde şişleri dizin. Aralara biber, soğan, domates koyabilirsiniz.200 derecede önceden ısıtılmış fırında, kontrollü bir şekilde 15-20 dakika arası pişirin. Çıkarıp sıcak sıcak servis edebilirsiniz. Afiyetler olsun.',malzemeler:[{adi:'300 gram kuzu kıyma (tercihen oranında yağlı)'},{adi:'1 diş sarımsak'},{adi:'1 tatlı kaşığı biber salçası'},{adi:'baharatlar'}]},
    {id:2,adi:'İzmir Köfte',resim:'https://i.lezzet.com.tr/images-xxlarge-recipe/izmir_kofte-22742567-6176-4e66-945b-8b3499f98bb3.jpg',kategori:'Kebap',tarif:'Kıymayı karıştırma kabına alın.Üzerine rendelenmiş soğan, sarımsak, galeta unu, yumurta ve baharatları ekleyip yoğurun. Yoğurduğunuz köfteye şekil verin ve yağda kızartın.Elma dilimi doğranmış patatesleri yağda kızartın. Tepsiye kızarttığınız patates ve köfteleri dizin. Üzerine domates ve biberleri ekleyin.Su, salça, yağ, kekik ve tuzu bir kapta karıştırın. Karışımı köftelerin üzerine dökün ve 175 derecelik fırında 30 dakika pişirin. Ardından çıkarıp servis edebilirsiniz. Afiyet olsun.',malzemeler:[{adi:'500 gram dana kıyma'},{adi:'1 adet rendelenmiş soğan'},{adi:'3 yemek kaşığı galeta unu'},{adi:'1 adet yumurta'},{adi:'4 adet patates(elma dilimi doğranmış)'},{adi:'baharatlar'}]},
    {id:3,adi:'İtalyan Pizza',resim:'https://im.haberturk.com/2020/02/05/ver1580901103/2573748_1200x627.jpg',kategori:'Pizza',tarif:'Pizza hamurunu hazırlamak için öncelikle; ılık su, kuru maya ve toz şekeri, küçük bir kapta karıştırdıktan sonra mayanın aktive olması için 10 dakika kadar bekletin.Elenmiş un ve tuzu derin bir kaba aldıktan sonra orta kısmını açın. Zeytinyağı ve sıvı maya karışımını da kattıktan sonra tüm malzemeyi orta kısımdan kenarlara doğru karıştırmaya başlayın.Önceden ısıtılmış 250 derece fırında yaklaşık 12 dakika peynirler eriyip, sucuklar kızarana kadar pişirdiğiniz pizzaları sıcak olarak servis edin. Dilim dilim sevdiklerinizle paylaşın.',malzemeler:[{adi:'2,5 su bardağı un'},{adi:'1/2 tatlı kaşığı kuru maya'},{adi:'tuz'},{adi:'1 yemek kaşığı zeytinyağı'},{adi:'2 yemek kaşığı domates salçası'},{adi:'250 gram rendelenmiş mozzarella peyniri'}]},
    {id:4,adi:'Spagetti Makarna',resim:'https://cdn.yemek.com/mncrop/313/280/uploads/2014/12/salcali-makarna-yeni.jpg',kategori:'Makarna',tarif:' Spagetti makarnayı paketi üzerinde belirtilen yönlendirmelere göre haşlayın. Haşlama suyunda tercihen 1 silme tatlı kaşığı tuz kullanın. Haşlama suyundan 2 kepçe alarak sosa eklemek üzere kenara ayırın.Haşlayıp süzmüş olduğunuz spagetti makarnayı sosun içerisine alıp güzelce karıştırın. Tavayı ileri geri hareket ettirerek sosa daha iyi bulanmasını sağlayabilirsiniz. Sos ve makarna birleşene dek dikkatlice karıştırarak pişirmeniz yeterli olacaktır.',malzemeler:[{adi:'1 paket makarna'},{adi:'tuz'}]},
    {id:5,adi:'Mantı',resim:'https://im.haberturk.com/2020/11/28/ver1606574471/2885324_810x458.jpg',kategori:'Mantı',tarif:'Mantıyı paketteki tarife göre haşlayın. Tereyağ ve baharatları tavada eritin.Sarımsaklı yoğurdu da hazırladıktan sonra üzerine dökerek servis edebilirsiniz.',malzemeler:[{adi:'1 paket mantı'},{adi:'baharatlar'},{adi:'yoğurt'}]}]

    if(this.no){this.yemekDetay = this.yemekler[this.no];}
   
  }

}
