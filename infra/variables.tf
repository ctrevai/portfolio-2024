variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "github_org" {
  description = "GitHub organization or username"
  type        = string
  default     = "ctrevai"
}

variable "github_repo" {
  description = "GitHub repository name"
  type        = string
  default     = "portfolio-2024"
}

variable "s3_bucket_name" {
  description = "S3 bucket for the website"
  type        = string
  default     = "www.trevai.com"
}

variable "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  type        = string
  default     = "E2P6NBNDBKFFLH"
}
