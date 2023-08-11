namespace Job_hub.Domain.Entities
{
    public partial class JobOffer
    {
        public class Tag
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public int JobOfferId { get; set; }
            public JobOffer JobOffer { get; set; }
        }
    }
}
