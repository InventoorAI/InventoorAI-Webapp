import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  IconButton
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  HamburgerIcon,
  WarningIcon,
  CloseIcon
} from '@chakra-ui/icons';
import { Settings, Bell, PackageOpen, LayoutDashboard, Package, Terminal } from 'lucide-react';

export default function WithSubnavigation() {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure()

  return (
    <Box w={'full'}>
      <Flex
        bg={'#177472'}
        color={'white'}
        minH={'60px'}
        py={{ base: 2 }}
        pr={{ base: 4 }}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        justifyContent={{ base: "space-between", md: "start" }}
        align={'center'}>
        <Flex display={{ base: "block", md: "none" }} mx={5}>
          <IconButton
            display={{ base: "block", md: "none" }}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            color="white"
            fontSize={"x-large"} 
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} ml={5} gap={2} alignItems="center">
          <PackageOpen />
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={'white'}
            fontSize={'large'}
            fontWeight={'bold'}
          >
            InventoorAI
          </Text>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'Dosis'}
            color={'white'}
            fontSize={'medium'}
            fontWeight={'bold'}
          >
            v1.0.0
          </Text>
          {/*<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>*/}
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          alignItems={'center'}
          spacing={6}>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'#FF7070'}
            bg={'#8F6767'}
            href={'#'}
            gap={2}
            _hover={{
              bg: 'red.300',
              color: 'white'
            }}>
            <WarningIcon />
            Emergency
          </Button>
          <Bell />
          <Box>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={'#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  _hover={{
                    textDecoration: 'none',
                  }}>
                  <Settings />
                </Link>
              </PopoverTrigger>

              <PopoverContent
                border={0}
                boxShadow={'xl'}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  <Text>fjdkaldjfasl</Text>
                  <Text>fjdkaldjfasl</Text>
                  <Text>fjdkaldjfasl</Text>
                </Stack>
              </PopoverContent>
            </Popover>
          </Box>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = 'white'
  const linkHoverColor = useColorModeValue('gray.300', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.200');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg="#54CBC9"
      p={4}
      color="white"
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, icon }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'center'}
        align={'center'}
        gap={2}
        _hover={{
          textDecoration: 'none',
        }}>
        <Icon as={icon} />
        <Text
          fontWeight={600}
          color="white">
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
//  {
//    label: 'item 1',
//    children: [
//      {
//        label: 'Explore Design Work',
//        subLabel: 'Trending Design to inspire you',
//        href: '#',
//      },
//      {
//        label: 'New & Noteworthy',
//        subLabel: 'Up-and-coming Designers',
//        href: '#',
//      },
//    ],
//  },
//  {
//    label: 'item 2',
//    children: [
//      {
//        label: 'Job Board',
//        subLabel: 'Find your dream design job',
//        href: '#',
//      },
//      {
//        label: 'Freelance Projects',
//        subLabel: 'An exclusive list for contract work',
//        href: '#',
//      },
//    ],
//  },
  {
    label: 'dashboard',
    icon: LayoutDashboard,
    href: '#',
  },
  {
    label: 'packages',
    icon: Package,
    href: '#',
  },
  {
    label: 'console',
    icon: Terminal,
    href: '#'
  }
];


