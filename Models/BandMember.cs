namespace RagnarockGasolin.Models {

    public class BandMember
    {
        private string _name;
        private string _href;
        private string _personImgSrc;
        private string _qrCodeImgSrc;
        public string Name { get => _name; }
        public string Href { get => _href; }
        public string PersonImgSrc { get => _personImgSrc; }
        public string QrCodeImgSrc { get => _qrCodeImgSrc; }
        public BandMember(string name, string href, string personImgSrc, string qrCodeImgSrc)
        {
            _name = name;
            _href = href;
            _personImgSrc = personImgSrc;
            _qrCodeImgSrc = qrCodeImgSrc;
        }
    }
}