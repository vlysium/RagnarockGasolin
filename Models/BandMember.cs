namespace RagnarockGasolin.Models {

    public class BandMember
    {
        private string _name;
        private string _personImgSrc;
        private string _qrCodeImgSrc;
        public string Name { get => _name; }
        public string PersonImgSrc { get => _personImgSrc; }
        public string QrCodeImgSrc { get => _qrCodeImgSrc; }
        public BandMember(string name, string personImgSrc, string qrCodeImgSrc)
        {
            _name = name;
            _personImgSrc = personImgSrc;
            _qrCodeImgSrc = qrCodeImgSrc;
        }
    }
}